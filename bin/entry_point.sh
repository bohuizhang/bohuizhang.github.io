#!/usr/bin/env bash
set -euo pipefail
# Restart the container after changing _config.yml; content changes reload automatically.
exec bundle exec jekyll serve --host=0.0.0.0 --port=8080 --livereload --force_polling
