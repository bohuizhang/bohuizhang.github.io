# 维护记录（2026-10-28）

## 范围与结果

本次针对 al-folio 模板遗留内容和构建维护。按后续要求，暂不处理 GitHub Security and quality 告警，也不声称已消除这些告警。没有提交、推送、发布或修改 GitHub Pages 设置。

源码文件内容从约 **70.37 MB 缩减到 32.12 MB（约 54.4%）**，按 Git 跟踪文件和新增文件的实际字节数计算，不包括 `.git`、依赖目录和生成目录。历史提交中的大文件仍保留，仓库历史未改写。

- 删除演示项目、书评、媒体、演示图表、Notebook、上游截图及旧 Lighthouse 报告。
- 删除上游 Docker 发布、演示站 Lighthouse、旧手动部署脚本及格式检查自动评论等无关流程。
- 清空模板作者的外部文章来源、社交账号、合作者和示例仓库数据；保留相应实现。
- 博客、项目、书架、团队、仓库、教学、菜单入口保留为未发布页面。项目卡片列表和博客文章列表可直接启用。
- 首页、论文、简历和新闻内容保留；Markdown/YAML/Liquid 的部分改动只是补齐末尾换行和统一格式。
- 字体、Bootstrap/MDB、SCSS、深浅色模式及主要布局保持不变。

## 修复和构建维护

1. `_plugins/cache-bust.rb` 原来计算不存在的 `assets/_sass`，导致 CSS 缓存标识不能随样式变更。现在包含实际 `_sass` 目录及 `assets/css/main.scss`，并按文件名排序。
2. `_plugins/file-exists.rb` 原来的 `strip!` 在字符串不需裁剪时返回 `nil`；改为 `strip`。
3. `_config.yml` 的规范域名改为 `https://bohuizhang.com`。从远端 `gh-pages/CNAME` 核实域名后，在源码增加 `CNAME` 和 `.nojekyll` 并显式输出。
4. 继续采用 Jekyll → `_site` → `gh-pages` → GitHub Pages 的部署路径。部署保留域名文件，并串行处理同一分支的部署。
5. 去掉不完整的部署路径过滤，Ruby 插件、依赖、配置修改均会构建。PR 仍只构建，不发布。
6. 使用已有 Nokogiri 和 Ruby 标准库检查生成页面及资源的内部链接，不将外部网站可用性作为部署前提。原有两套重复链接检查合并到构建中。
7. 格式工作流改为 `npm ci`，严格使用现有锁文件，不再每次安装任意最新格式工具及额外报告/评论工具。
8. CI 和 Docker 对齐 Ruby 3.3 系列；Jekyll 限定为 4.x（`~> 4.4`），保留已经安装并用于验证的锁定版本 4.4.1；PurgeCSS 固定为 7.0.2；已有 nbconvert 约束在 7.x。
9. Docker 和开发容器改为使用本仓库 Dockerfile。入口脚本不再删除/恢复锁文件、修改全局 Git 信任配置或强杀全部 Jekyll 进程。
10. 增加轻量本地配置，未安装 ImageMagick 时仍可预览原图。生产的 WebP 生成保持启用。

没有新增应用依赖，也没有升级 Bootstrap/MDB 等可能改变外观的大版本。已保留的可选插件并不意味着其安全状态已经审计。

## 验证与限制

- 修改前的原始构建依赖模板作者的网络文章，随后还会转换无用 Notebook；本机缺少 ImageMagick 和 Jupyter，因此无法直接完成原始生产构建。
- 对照基线仅关闭外部示例文章抓取、WebP 生成，并排除示例 Notebook。对照时使用相同的本机 Ruby 3.1.6 和锁定 gem。
- 修改后的轻量生产模式构建完成，生成页面及资源的内部链接检查通过。
- 主要四页的正文 DOM 与对照一致（忽略移除脚本留下的空白），主 CSS 字节一致；404 返回链接随域名配置修正。没有完成浏览器逐像素截图比较。
- CSS 缓存变化及文件存在检查的回归检查通过。
- 可选页面默认不生成，`--unpublished` 能读取其入口；示例集合为空。
- Prettier、Ruby/YAML/Shell 语法和 Docker Compose 配置检查通过。
- 本地 Jekyll HTTP 服务已启动验证，首页和简历返回 HTTP 200；验证后停止。
- 最终构建确认 `CNAME`、`.nojekyll` 正常输出，未发布入口与演示资源没有残留。
- 本机没有 ImageMagick，Docker daemon 未启动；完整 WebP 生成和容器实际构建/启动尚未验证。GitHub Actions 的 Linux/Ruby 3.3 环境需在推送后验证。
- Sass 的旧式 `@import` 和旧依赖的弃用提示仍存在。为保持样式不变，本次没有大规模迁移第三方图标与 Sass 代码；后续升级应配合浏览器视觉回归。

本地启动、生产构建及恢复可选功能的方法见根目录 README。
