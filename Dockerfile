FROM ruby:3.3-slim

ENV LANG=C.UTF-8 \
    JEKYLL_ENV=development

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential git imagemagick nodejs zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /srv/jekyll
COPY Gemfile Gemfile.lock ./
RUN bundle install

EXPOSE 8080 35729
CMD ["bash", "bin/entry_point.sh"]
