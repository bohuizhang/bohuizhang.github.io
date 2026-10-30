#!/usr/bin/env ruby
# Check generated local pages and assets; external sites are not build dependencies.
require 'nokogiri'
require 'uri'
require 'yaml'
require 'pathname'

root = Pathname.new(ARGV.fetch(0, '_site')).expand_path
site_url = YAML.load_file('_config.yml').fetch('url')
site_host = URI(site_url).host
missing = []

root.glob('**/*.html').each do |page|
  doc = Nokogiri::HTML(page.read)
  links = doc.css('[href], [src]').flat_map { |node| [node['href'], node['src']].compact }
  links += doc.css('[srcset]').flat_map { |node| node['srcset'].split(',').map { |entry| entry.strip.split.first } }
  links.compact.uniq.each do |link|
    next if link.empty? || link.start_with?('#', 'data:', 'mailto:', 'tel:', 'javascript:')

    uri = URI.parse(link)
    next if uri.host && uri.host != site_host
    next if uri.scheme && !%w[http https].include?(uri.scheme)

    path = URI::DEFAULT_PARSER.unescape(uri.path)
    target = path.start_with?('/') ? root.join(path.delete_prefix('/')) : page.dirname.join(path)
    target = target.join('index.html') if target.directory?
    missing << "#{page.relative_path_from(root)}: #{link}" unless target.file?
  end
end

abort "Missing local links:\n#{missing.join("\n")}" unless missing.empty?
puts 'Local page and asset links passed.'
