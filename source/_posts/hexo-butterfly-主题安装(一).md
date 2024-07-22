---
title: Hexo 及 Butterfly 主题安装、部署（一）
tags:
  - 教程
  - 主题
  - Hexo
  - Butterfly
abbrlink: 380b088c
date: 2024-07-09 11:06:00
---

## 前言

最近稍微有点时间，想着重新搭建下自己的个人站点。经过一番对比，最终选择了静态博客框架 `Hexo` + `Butterfly` 主题。

**那么为什么选择 Hexo 且选择 Butterfly 主题呢？**

- `Hexo` 是一个快速、简洁且高效的博客框架，基于 `Node.js` 开发，支持 `Markdown` 编写文章，支持主题和插件扩展，可以**快速搭建**一个博客网站。
- `Butterfly` 主题是一个简洁、优雅的主题，支持多种配置，支持多种插件，支持多种功能，适合个人站点使用。
- `Hexo` 的社区活跃，不仅有很多优秀的主题和插件可供选择，而且在此基础上还可以满足更多的个性化需求。

{% note info %}
预览地址：[Arvinjun の站点](https://niezicheng.github.io/blog-hexo/)
{% endnote %}

## 介绍

[Hexo](https://hexo.io/) 是一个快速、简洁且高效的博客框架，基于 [Node.js](https://nodejs.org/) 开发，支持 [Markdown](https://daringfireball.net/projects/markdown/) 编写文章，支持主题和插件扩展，可以快速搭建一个博客网站。本文主要介绍 `Hexo` 和 [Butterfly](https://butterfly.js.org/) 主题的搭建和部署。

## 安装 Hexo 及 Butterfly 主题

### 安装 Hexo

全局安装 Hexo

```zsh
npm install -g hexo-cli
```

初始化项目，如下所示：

```zsh
hexo init blog-hexo
cd blog-hexo
npm i
```

![image-20240709112207310.webp](https://niezicheng.github.io/files/images/hexo/image-20240709112207310.webp)

### 安装 Butterfly 主题

在 Hexo 项目中安装 `Butterfly` 主题，在项目根目录执行下面命令会将 `Butterfly` 主题下载到 `themes/butterfly` 目录下：

```zsh
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note warning %}

注意：提交代码时候需要删除 `themes/butterfly` 目录下的 `.git` 文件夹，防止仓库冲突。

{% endnote %}

#### 应用主题

修改 Hexo 项目的 `_config.yml` 文件，将 `theme` 配置项修改为 `butterfly`：

```yml
theme: butterfly
```

#### 安装插件

如果你没有 `pug` 以及 `stylus` 的渲染器，安装：

```zsh
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

#### 后续升级建议

为了减少升级主题带来的不便，建议将主题配置文件 `themes/butterfly/_config.yml` 复制一份到根目录下并重命名为 `_config.butterfly.yml`，之后所有的主题相关配置都在 `_config.butterfly.yml` 文件中修改即可。

{% note warning %}

注意：`Hexo` 会自动合并主题中的 `_config.yml` 文件和根目录下的 `_config.butterfly.yml` 主题配置内容，且 `_config.butterfly.yml` 主题文件配置优先级更高。

{% endnote %}

## 启动 Hexo 服务

在 `Hexo` 项目根目录执行下面命令启动 `Hexo` 服务：

```zsh
hexo server
```

打开浏览器访问 `http://localhost:4000/` 即可查看 `Hexo` 博客网站。

## 部署 Hexo 项目

笔者这边仍是通过 `GitHub Pages` 部署 `Hexo` 项目，运行部署命令前，建议先简单了解下我的另一篇文章 [Github Actions 自动化部署](https://juejin.cn/post/7311907901047160882)。

### 配置部署

在 `Hexo` 项目根目录下的 `_config.yml` 文件中配置 `deploy` 部署信息：

```yml
# 线上访问的站点地址
url: # 线上访问的站点域名地址
root: /blog-hexo # 站点根目录路径

# 部署配置
deploy:
  type: git
  repo: # 你的仓库地址
  branch: gh-pages # 你需要部署分支
```

{% note warning %}

我部署的站点根目录路径为 `/blog-hexo`，所以上面 root 设置为 `//blog-hexo`。如果设置了根路径，那么在项目中资源引用也应添加该根路径前缀，否则可能无法正常访问资源。

{% endnote %}

### 执行部署

1. 创建你的部署分支，笔者这边是 `gh-pages` 分支，执行下面命令：

```zsh
git checkout -b gh-pages
```

2. 在 `Github` 仓库设置中将 `gh-pages` 分支设置为 `GitHub Pages` 的源。如下图所示：

![image-20240712100751477.webp](https://niezicheng.github.io/files/images/hexo/image-20240712100751477.webp)

3. 在 `Hexo` 项目根目录执行下面命令部署 `Hexo` 项目：

```zsh
hexo deploy
```

4. 对应 `Action` 下 `page-build-deployment` 任务部署成功后，打开浏览器访问 `https://<username>.github.io/<repository>/` 即可查看 `Hexo` 博客网站。 如下图所示：

![image-20240719105253201.webp](https://niezicheng.github.io/files/images/hexo/image-20240719105253201.webp)

## 结语

至此，`Hexo` 及 `Butterfly` 主题安装、部署完成。如果你有更好的建议或者更好的主题推荐，欢迎留言交流。
