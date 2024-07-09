---
title: Hexo 及 Butterfly 主题安装
tags:
  - 教程
  - 主题
  - Hexo
  - Butterfly
abbrlink: 380b088c
date: 2024-07-09 11:06:00
---

## 介绍

[Hexo](https://hexo.io/) 是一个快速、简洁且高效的博客框架，基于 [Node.js](https://nodejs.org/) 开发，支持 [Markdown](https://daringfireball.net/projects/markdown/) 编写文章，支持主题和插件扩展，可以快速搭建一个博客网站。本文主要介绍 `Hexo` 的安装和 [Butterfly](https://butterfly.js.org/) 主题的使用。

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

![image-20240709112207310](https://tinypng.com/backend/opt/download/n5dkvd1j9jn595x808mz6d8gjnm6x28t)

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

打开浏览器访问 `http://localhost:4000` 即可查看 `Hexo` 博客网站。
