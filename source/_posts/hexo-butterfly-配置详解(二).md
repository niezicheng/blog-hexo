---
title: Hexo 及 Butterfly 配置详解（二）
abbrlink: 190d0437
date: 2024-07-19 15:53:37
tags:
  - 教程
  - 主题
  - Hexo
  - Butterfly
---

## 前言

> 官方教程：[Butterfly 主题配置](https://butterfly.js.org/posts/507c070f/)
>
> `Butterfly` 主题支持 [font-awesome v6](https://fontawesome.com/icons?from=io) 图标

> 本文主要 hexo 项目配置文件 `_config.yml` 和主题配置文件 `_config.butterfly.yml` 的详细配置说明。结合这两个配置文件，在学习的过程中完成一些功能的配置。

## 网站资料

```yml
# _config.yml
title: Arvinjunの站点 # 网站标题
subtitle: 心中有光，何惧路长；志存高远，方能行远自迩 # 网站副标题
description: 心中有光，何惧路长；志存高远，方能行远自迩 # 网站描述
keywords: hexo,butterfly,arvinjun,blog,hexo-butterfly,hexo-theme-butterfly # 网站关键字
author: Arvinjun # 网站作者
language: zh-CN # 网站语言
timezone: Asia/Shanghai # 时区
```

## 导航栏设置

### 参数设置

```yml
# _config.butterfly.yml
nav:
  logo: # 网站的 logo，支持图片，直接填入图片链接
  display_title: true # 是否显示网站标题
  fixed: false # 是否固定导航栏
```

### 菜单 & 目录

```yml
# _config.butterfly.yml
menu:
  首页: / || fas fa-home
  目录 || fas fa-list:
    归档: /archives/ || fas fa-archive
    标签: /tags/ || fas fa-tags
    分类: /categories/ || fas fa-folder-open
  娱乐 || fa fa-heartbeat:
    音乐: /music/ || fas fa-music
    图库: /gallery/ || fas fa-images
    电影: /movies/ || fas fa-video
  友链: /link/ || fas fa-link
  工具: /tools/ || fas fa-screwdriver-wrench
  关于: /about/ || fas fa-heart
```

**说明：**

- `/xxx/` 为菜单链接格式，`xxx` 为页面路径（项目 `source` 目录下的文件夹名称）
- `fas fa-home` 为 [Font Awesome](https://fontawesome.com/) 图标，可以根据自己的需求更换图标
- `||` 为菜单链接和图标的分隔符

## 代码块

### 代码主题样式

{% tabs code blocks %}

<!-- tab 简单 -->

`Butterfly` 代码高亮样式配置：

```yml
# _config.butterfly.yml
#  darker / pale night / light / ocean / mac / mac light / false
highlight_theme: mac light
```

<!-- endtab -->

<!-- tab 复杂 -->

主题从 3.0 开始，支持使用自定义的代码顔色。关于如何自定义主题，请查看下面这篇文章 [自定义代码配色](https://butterfly.js.org/posts/b37b5fe3/)

<!-- endtab -->

{% endtabs %}

### 代码复制

```yml
# _config.butterfly.yml
highlight_copy: true
```

### 代码展开/关闭

```yml
# _config.butterfly.yml
highlight_shrink: false # 代码框展开
```

**其它方式：**

我们也可以在 `post/page` 页对应的 `markdown` 文件中，通过 `Front-matter` 添加 `highlight_shrink` 来独立配置，且 `Front-matter` 配置优先级更高。如下所示：

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
highlight_shrink: true
---
```

### 代码换行

```yml
# _config.butterfly.yml
code_word_wrap: true
```

**注意：**

1. 如果使用 `highlight` 渲染，需要找到你站点的 `Hexo` 配置文件 `_config.yml`，将 `line_number` 改成 `false`。 如下所示：

```yml
# _config.yml
highlight:
  line_number: false
  auto_detect: false
  tab_replace: ""
  wrap: true
  hljs: false
```

2. 如果使用 `prismjs` 渲染，需要找到你站点的 `Hexo` 配置文件 `_config.yml`，将 `line_number` 改成 `false`。 如下所示：

```yml
# _config.yml
prismjs:
  preprocess: true
  line_number: false
  tab_replace: ""
```

### 代码高度

```yml
# _config.butterfly.yml
highlight_height_limit: 300 # unit: px ｜ true | false
```

**说明：**

- 单位 `px`，`300` 为限制代码高度的值。(实际限制高度为 `highlight_height_limit + 30 px` ，多增加 `30px` 限制，目的是避免代码高度只超出 `highlight_height_limit` 一点时，出现展开按钮，但展开后却没内容)
- 不适用于隐藏后的代码块（ css 设置 display: none）

## 顶部图

### 禁用

```yml
# _config.butterfly.yml
disable_top_img: true # Disable all banner image
```

### 配置

- 页面 `page` 顶部图的获取顺序：文档 Front-matter 配置的 `top_img` > 配置文件的 `default_top_img`
- 文章 `post` 顶部图的获取顺序：文档 Front-matter 配置的 `top_img` > `cover` > 配置文件的 `default_top_img`

```yml
# _config.butterfly.yml
index_img: # 主页顶部图
default_top_img: # 默认顶部图
archive_img: # 归档页顶部图
tag_img: # 标签页顶部图
tag_per_img: # 标签子页面的顶部图，可配置每个标签的顶部图
category_img: # 分类页顶部图
category_per_img: # 分类子页面的顶部图，可配置每个分类的顶部图
```

`tag_per_img` 和 `category_per_img` 是 `3.2.0` 新增的内容，可对 `tag` 和 `category` 进行单独的配置

> 注意：不推荐为每个 `tag` 和每个 `category` 都配置不同的顶部图，因为配置太多会拖慢生成速度

```yml
# _config.butterfly.yml
tag_per_img:
  hexo: /img/tag/hexo.jpg
  butterfly: /img/tag/butterfly.jpg
  ...
category_per_img:
  教程: /img/category/教程.jpg
  主题: /img/category/主题.jpg
  ...
```

### 配置值

上面列举配置的值可以是下面五种类型：

- 不填：显示默认的 `top_img`（如有），否则显示默认的顔色；文章页 `top_img` 留空的话，会显示 `cover` 的值
- img 链接：支持相对路径和绝对路径，显示所配置的图片
- 颜色值：显示所配置的颜色。【支持 HEX 值、RGB 值、顔色词(orange)、渐变色等】
- transparent：透明背景
- false：不显示顶部图

## 文章封面

{% note info %}
文章封面的获取顺序: 文章配置 `Front-matter` 的 `cover` > 全局配置文件的 `default_cover` > `false`
{% endnote %}

{% tabs code blocks %}

<!-- tab 全局配置 -->

```yml
# _config.butterfly.yml
cover:
  index_enable: true # 主页是否显示文章封面图
  aside_enable: true # 侧栏是否显示文章封面图
  archives_enable: true # 归档页面是否显示文章封面图
  # 主页卡片文章封面的显示位置
  position: both # left/right/both
  # 当没有设置 cover 时，默认的封面展示，可配置图片链接/顔色/渐变色等。当配置多张图片时,会随机选择一张作为 cover
  default_cover:
    - /img/cover/default-cover.webp
    - /img/cover/one.webp
    - /img/cover/two.webp
    - /img/cover/three.webp
```

<!-- endtab -->

<!-- tab 文章配置 -->

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
cover: /img/cover/one.webp
---
```

<!-- endtab -->

{% endtabs %}

## 文章

{% tabs article config %}

<!-- tab 文章页配置 -->

### 文章锚点

开启页面锚点后，当你在进行滚动时，页面链接会根据标题 `ID` 进行替换

{% note info %}
每替换一次，会留下一个历史记录。所以如果一篇文章有很多锚点的话，网页的历史记录会很多
{% endnote %}

```yml
# _config.butterfly.yml
anchor:
  # when you scroll, the URL will update according to header id.
  auto_update: false
  # Click the headline to scroll and update the anchor
  click_to_scroll: false
```

### 文章信息

{% note info %}
`date_format` 是 `3.2.0` 新增的内容，配置时间显示明确时间还是相对时间
{% endnote %}

```yml
# _config.butterfly.yml
post_meta:
  page:
    date_type: both # created/updated/both 主页文章日期是创建日或者更新日或都显示
    date_format: relative # date/relative 显示明确日期还是相对日期
    categories: true # true/false 主页是否显示分类
    tags: true # true/false 主页是否显示标签
    label: true # true/false 显示描述性文字
  post:
    date_type: both # created/updated/both 文章页日期是创建日或者更新日或都显示
    date_format: relative # date/relative 显示明确日期还是相对日期
    categories: true # true/false 文章页是否显示分类
    tags: true # true/false 文章页是否显示标签
    label: true # true/false 显示描述性文字
```

### 文章版权

```yml
# _config.butterfly.yml
post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

{% note info %}
由于 `Hexo 4.1` 开始，默认对网址进行解码，以至于如果是中文网址，会被解码，可设置 `decode: true` 来显示中文网址。
{% endnote %}

如果有文章（例如：转载文章）不需要显示版权，可以在文章 `Front-matter`单独设置

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
copyright: false
---
```

从 `3.0.0` 开始，支持对单独文章设置版权信息，可以在文章 `Front-matter` 单独设置

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
copyright_author: # 文章作者
copyright_author_href: https://xxxxxx.com # 文章链接
copyright_url: https://xxxxxx.com # 版本地址
copyright_info: 此文章版权归 xxxxx 所有，如有转载，请注明来自原作者 # 描述文字
---
```

### 文章打赏

```yml
# _config.butterfly.yml
reward:
  enable: true # 是否开启打赏配置
  text:
  QR_code:
    - img: /img/xxx.jpg # 展示微信收款码
      link: # 点击跳转链接
      text: 微信
    - img: /img/xxx.jpg
      link:
      text: 支付宝
```

### 文章目录

```yml
# _config.butterfly.yml
toc:
  post: true # 文章页是否显示 TOC
  page: true # 普通页面是否显示 TOC
  number: true # 是否显示章节数
  expand: false # 是否展开 TOC
  style_simple: false # 简洁模式（侧边栏只显示 TOC, 只对文章页有效 ）
  scroll_percent: true # 是否显示滚动进度百分比
```

如果有文章需要单独设置，可以在文章 `Front-matter`（优先级更高）单独设置 `toc` 和 `toc_number`

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
toc: false
toc_number: false
---
```

### 相关推荐

- 当文章封面设置为 `false` 时，或者没有获取到封面配置，相关文章背景将会显示主题色
- 相关文章推荐的原理是根据文章 `tags` 的比重来推荐

```yml
# _config.butterfly.yml
related_post:
  enable: true # 是否开启相关文章推荐
  limit: 6 # 显示的数量限制
  date_type: created # created/updated 文章日期顯示創建日或者更新日
```

### 过期提醒

```yml
# _config.butterfly.yml
noticeOutdate:
  enable: false # 是否开启过期文字提示
  style: flat # style: simple/flat # 提示信息展示样式
  limit_day: 500 # 距离更新时间多少天才显示文章过期提醒
  position: top # position: top/bottom，提示信息显示位置
  message_prev: It has been # 天数之前的文字
  message_next: days since the last update, the content of the article may be outdated. # 天数之后的文字
```

### 编辑按钮

```yml
post_edit:
  enable: false # 是否展示文章编辑按钮，点击会跳转到对应的链接
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url: # 点击编辑按钮跳转的链接，可以设置文章在 github 上链接地址
```

### 分页按钮

{% note info %}
当文章封面设置为 `false` 时，或者没有获取到封面配置，分页背景将会显示主题色。
{% endnote %}

```yml
# post_pagination (分頁)
# value: 1 || 2 || false
# 1: 下一篇显示的是旧文章
# 2: 下一篇显示的是新文章
# false: 关闭分页按钮
post_pagination: 2
```

<!-- endtab -->

<!-- tab 文章节选 -->

> 因为主题 `UI` 的关係，主页文章节选只支持自动节选和文章页 `description`，即下面的 1 和 3 两种方式。

1. **description:** 只显示描述信息
2. **both:** 优先选择 `description`，如果没有配置 `description`，则显示自动节选的内容
3. **auto_excerpt (default):** 只显示自动节选
4. **false:** 不显示文章内容

```yml
# _config.butterfly.yml
index_post_content:
  method: 3
  length: 500 # if you set method to 2 or 3, the length need to config
```

`description` 在文章 `Front-matter` 里添加

```markdown
---
title: Hexo 及 Butterfly 配置详解（二）
description: Hexo 的 Butterfly 主题配置详细解答
---
```

<!-- endtab -->

{% endtabs %}

## 复制版权

配置网站是否可以复制以及复制的内容是否添加版权信息

```yml
# _config.butterfly.yml
copy:
  enable: true # 是否开启网站复制权限
  copyright:
    enable: true # 是否开启复制版权信息添加
    limit_count: 30 # 字数限制，当复制文字大于这个字数限制时，将在复制的内容后面加上版权信息
```

## 侧边栏

### 侧边栏排版

```yml
# _config.butterfly.yml
aside:
  enable: true # 是否显示侧边栏
  hide: false
  button: true # 是否展示侧边栏显/隐按钮
  mobile: true # display on mobile
  position: right # left/right，侧边栏展示的位置
  display:
    archive: true
    tag: true
    category: true
  card_author:
    enable: true
    description:
    button:
      enable: true
      icon: fab fa-github
      text: Follow Me
      link: https://github.com/niezicheng
  card_announcement:
    enable: true
    content: 👏👏 希望和各位站友共同进步！
  card_recent_post:
    enable: true
    limit: 5 # if set 0 will show all
    sort: date # date or updated
    sort_order: # Don't modify the setting unless you know how it works
  card_categories:
    enable: true
    limit: 8 # if set 0 will show all
    expand: none # none/true/false
    sort_order: # Don't modify the setting unless you know how it works
  card_tags:
    enable: true
    limit: 40 # if set 0 will show all
    color: true
    orderby: random # Order of tags, random/name/length
    order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
    sort_order: # Don't modify the setting unless you know how it works
  card_archives:
    enable: true
    type: monthly # yearly or monthly
    format: MMMM YYYY # eg: YYYY年MM月
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
    limit: 8 # if set 0 will show all
    sort_order: # Don't modify the setting unless you know how it works
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true
    sort_order: # Don't modify the setting unless you know how it works
  card_post_series:
    enable: true
    series_title: false # The title shows the series name
    orderBy: "date" # Order by title or date
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
```

### 社交图标 & 头像

{% tabs base info %}

<!-- tab 社交图标 -->

{% note info %}
`Butterfly` 主题支持 [font-awesome v6](https://fontawesome.com/icons?from=io) 图标
{% endnote %}

```yaml
# _config.butterfly.yml
# 图标名：url || 描述性文字 || color
social:
  # 图标名：url || 描述性文字 || color
  fab fa-github: https://github.com/xxxxx || Github || "#hdhfbb"
  fas fa-envelope: mailto:xxxxxx@gmail.com || Email || "#000000"
```

<!-- endtab -->

<!-- tab 头像 -->

```yml
# _config.butterfly.yml
avatar:
  img: /img/avatar.jpg # 头像图片路径，'/' 相当于站点根目录下的 source 目录
  effect: false # 是否开启头像转圈
```

<!-- endtab -->

{% endtabs %}

### 访问人数

> 访问 [busuanzi](https://busuanzi.ibruce.info/) 的官方网站查看更多的介绍。

```yml
# _config.butterfly.yml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

{% note info %}
如果需要修改 `busuanzi` 的 `CDN` 链接，可通过主题配置文件的 `CDN` 中的 `option` 进行修改
{% endnote %}

```yml
# _config.butterfly.yml
CDN:
  option:
    busuanzi: xxxxxxxxx
```

### 运行时间

```yml
# _config.butterfly.yml
runtimeshow:
  enable: false
  publish_date: # 网页开通时间。格式: 月/日/年 时间，也可以写成 年/月/日 时间
```

### 最新评论

> 最新评论只会在刷新时才会去读取，并不会实时变化（3.1.0 起支持）

由于 `API` 有访问次数限制，为了避免调用太多，主题默认存取期限为 `10` 分钟。也就是説，调用后资料会存在 `localStorage` 里，`10` 分钟内刷新网站只会去 `localStorage` 读取资料。 `10` 分钟期限一过，刷新页面时才会去调取 `API` 读取新的数据。（ `3.6.0` 新增了 `storage` 配置，可自行配置缓存时间）

```yml
# _config.butterfly.yml
newest_comments:
  enable: true # 是否展示最新评论
  sort_order: # Don't modify the setting unless you know how it works
  limit: 6 # 显示的数量
  storage: 10 # 设置缓存时间，单位分钟
  avatar: true # 是否显示头像
```

### 自定义栏目

如果你想要在侧边看栏中自定义栏目，可以参考 `Butterfly` 主题官方的这篇文章 [自定义侧边栏](https://butterfly.js.org/posts/ea33ab97/)

## Footer 设置

```yml
# _config.butterfly.yml
footer:
  owner:
    enable: true
    since: 2020 # 自从 2020 年至今，©2020 - 2024 By Arvinjun
  custom_text: # 自定义页脚文本，支持 HTML
  copyright: true # Copyright of theme and framework
```

## 右下角按钮

### 简体繁体互换

```yml
# _config.butterfly.yml
translate:
  enable: false
  default: 繁 # 默认按钮显示文字(网站是简体，应设置为'default: 繁')
  defaultEncoding: 2 # 网站默认语言，1: 繁体中文, 2: 简体中文
  translateDelay: 0 # 延迟时间,若不在前, 要设定延迟翻译时间, 如 100 表示 100ms, 默认为 0
  msgToTraditionalChinese: "繁" # 当文字是简体时，按钮显示的文字
  msgToSimplifiedChinese: "簡" # 当文字是繁体时，按钮显示的文字
```

### 阅读模式

> 阅读模式下会去掉除文章外的内容，避免干扰阅读，右下角会有阅读模式按钮，只会出现在文章页面。

```yml
# _config.butterfly.yml
readmode: true # 是否支持文章阅读模式，右下角设置展示阅读切换模式按钮
```

### 昼夜模式

```yml
# _config.butterfly.yml
darkmode:
  enable: true
  button: true # 是否在右下角显示日夜模式切换按钮
  # 自动切换的模式
  # autoChangeMode: 1 跟随系统而变化，不支持的浏览器/系统将按照时间 start 到 end 之间切换为 light mode
  # autoChangeMode: 2 只按照时间 start 到 end 之间切换为 light mode ,其余时间为 dark mode autoChangeMode: false 取消自动切换
  # autoChangeMode: false 取消自动切换
  autoChangeMode: false
  start: # 8 light mode 的开始时间
  end: # 22 light mode 的结束时间
```

### 滚动状态百分比

```yml
# _config.butterfly.yml
rightside_scroll_percent: true # show scroll percent in scroll-to-top button
```

### 按钮排序

```yml
# _config.butterfly.yml
# Don't modify the following settings unless you know how they work (非必要请不要修改 )
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat 不要重复
rightside_item_order:
  enable: false
  hide: # readmode,translate,darkmode,hideAside
  show: # toc,chat,comment
```
