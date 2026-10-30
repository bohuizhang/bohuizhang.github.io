# Bohui Zhang — academic homepage

Personal academic website: <https://bohuizhang.com/>. Built with the [al-folio](https://github.com/alshedivat/al-folio) Jekyll/Liquid template, preserving its layout, styling, and optional features.

## Editing content

| Content                                  | Files                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------- |
| Biography and profile photo              | `_pages/about.md`, `assets/img/prof_pic.jpg`                           |
| Publications and selected papers         | `_bibliography/papers.bib`; use `selected={true}` for featured entries |
| News                                     | `_news/*.md`                                                           |
| Web CV and PDF CV                        | `_data/cv.yml`, `assets/pdf/cv.pdf`                                    |
| Social links                             | `_data/socials.yml`                                                    |
| Site configuration and domain            | `_config.yml`, `CNAME`                                                 |
| Layouts, reusable components, and styles | `_layouts/`, `_includes/`, `_sass/`                                    |

## Local preview

Use the latest patch release of Ruby 3.3, Bundler, and Node.js 22. Node handles JavaScript minification; npm packages are not required to run Jekyll.

Install the Ruby dependencies before the first run:

```sh
bundle install
```

Start a lightweight preview without ImageMagick or Python/Jupyter:

```sh
bundle exec jekyll serve --config _config.yml,_config_local.yml --livereload
```

Open <http://localhost:4000/>. Changes to Markdown, Liquid, and SCSS trigger automatic rebuilds. Restart the command after changing configuration files. The local configuration disables responsive WebP generation and displays the original images, leaving the production configuration unchanged.

For detailed debugging output:

```sh
bundle exec jekyll serve --config _config.yml,_config_local.yml --livereload --trace --verbose
```

Build locally and check internal page and asset links:

```sh
JEKYLL_ENV=production bash bin/cibuild --config _config.yml,_config_local.yml
```

To verify WebP generation with the production configuration, install ImageMagick (`brew install imagemagick` on macOS or `sudo apt-get install imagemagick` on Ubuntu), confirm that `convert -version` works, then run:

```sh
JEKYLL_ENV=production bash bin/cibuild
```

Python dependencies are only needed when publishing Jupyter notebooks:

```sh
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

Check formatting using the locked development dependencies:

```sh
npm ci
npx prettier . --check
# To apply formatting: npx prettier . --write
```

## Docker preview

With Docker Desktop running:

```sh
docker compose up --build
```

Open <http://localhost:8080/>. The image builds from this repository's Dockerfile and includes Ruby, Node, and ImageMagick. It does not depend on the template author's older image. Run `docker compose restart` after changing `_config.yml`, and rebuild the image after changing the Gemfile. For notebook conversion, also install Python and the dependencies in `requirements.txt` inside the image.

## GitHub Pages deployment

The existing deployment flow is preserved:

1. Updates to `main` or `master` trigger `.github/workflows/deploy.yml`, which builds the site, checks internal links, and removes unused CSS.
2. `Deploy site` publishes `_site` to `gh-pages`. Pull requests build without publishing.
3. GitHub Pages' built-in `pages build and deployment` workflow publishes that branch.

Under repository Settings → Pages, keep **Deploy from a branch → gh-pages → /(root)** and the custom domain `bohuizhang.com`. Do not point GitHub's default Jekyll builder directly at the source branch: this project uses custom plugins, including Scholar.

The source `CNAME` and `.nojekyll` files are included in the generated site, and deployment also preserves these files on the destination branch. No DNS changes or hosting migration are needed. Changes to Ruby plugins, dependencies, and configuration also trigger a build.

## Enabling optional features

Demo content has been removed, while layouts, plugins, styles, and support for charts, math, notebooks, and comments remain available.

- **Blog:** Set `published` and `nav` to `true` in `_pages/blog.md`. Create `_posts/YYYY-MM-DD-title.md` with `layout: post`, `title`, and `date` in its front matter. The default list has no pagination; the archive plugin still generates post archives. Comments are disabled by default. To import your own external posts, add their sources to `external_sources`; the blog list supports external links.
- **Projects:** Add Markdown files under `_projects/` with `layout: page`, `title`, `description`, and `importance`, plus an optional `img`. Enable `published` and `nav` in `_pages/projects.md` to display project cards.
- **Bookshelf:** Add book reviews under `_books/` using `layout: book-review`, then enable `_pages/books.md`.
- **People, repositories, teaching, and dropdown menus:** The corresponding `_pages/` files remain available. Add real content before setting `published: true` and `nav: true`. Place profile text files in `_pages/`, reference them through `profiles[].content`, and exclude those fragments through `exclude` in `_config.yml`.
- **JSON Resume:** The CV uses `_data/cv.yml` by default. To switch, provide valid JSON and configure `jekyll_get_json`; do not leave an empty JSON file.

`nav: false` only hides a page from navigation; `published: false` prevents it from being generated. Use `--unpublished` to preview unpublished pages. Place draft posts in `_drafts/` and preview them with `--drafts`.

Verify dependency updates locally before committing `Gemfile.lock` or `package-lock.json`. Bootstrap/MDB, icon fonts, and the Sass structure retain their existing versions to preserve the site's appearance; major version upgrades require separate validation. For additional theme features, see the [upstream al-folio documentation](https://github.com/alshedivat/al-folio).

See [docs/MAINTENANCE.md](docs/MAINTENANCE.md) for the maintenance record and [LICENSE](LICENSE) for the original template's MIT license.
