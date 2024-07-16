---
title: hexo-twikoo-评论
tags:
  - 教程
  - Hexo
  - Twikoo
abbrlink: a77c77c
date: 2024-07-12 11:10:27
---

## 前言

在一个网站中，评论功能是一个非常重要的功能(优先实现)，可以让用户在阅读文章的同时，也可以进行评论交流。而接下来就让我们一起来看看如何在 `Hexo` 通过 [Vercel](https://vercel.com/) + [MongoDB](https://www.mongodb.com/) 方案搭建 [Twikoo](https://twikoo.js.org/) 评论系统。

## 主题评论配置

在主题配置文件 `_config.butterfly.yml` 中开启 `Twikoo` 配置，如下所示：

```yml
comments:
  # Choose: Disqus/Disqusjs/Livere/Gitalk/Valine/Waline/Utterances/Facebook Comments/Twikoo/Giscus/Remark42/Artalk
  use: Twikoo ## 使用的评论（请注意，最多支持两个，使用逗号隔开，如果不需要请留空）
  text: true # 是否显示评论服务商的名字
  # 是否为评论开启lazyload，开启后，只有滚动到评论位置时才会加载评论所需要的资源（开启 lazyload 后，评论数将不显示）
  lazyload: true
  count: true # 是否在文章顶部显示评论数(livere、Giscus 和 utterances 不支持评论数显示)
  card_post_count: true # 是否在首页文章卡片显示评论数(gitalk、livere 、Giscus 和 utterances 不支持评论数显示)
```

## Twikoo 评论系统

> Twikoo 是一个简洁、安全、免费的静态网站评论系统，支持在任何静态网站上使用。更多详细信息请查看 [Twikoo 文档](https://twikoo.js.org/)。

`Twikoo` 评论系统的特点如下：

{% tabs twikoo-features %}

<!-- tab 简单 -->

- 免费搭建（使用云开发 / Vercel / 私有服务器作为评论后台）
- 简单部署（支持云开发 / Vercel 一键部署）
<!-- endtab -->

<!-- tab 易用 -->

- 支持回复、点赞
- 无需额外适配，支持搭配浅色主题与深色主题使用
- 支持 API 调用，批量获取文章评论数、最新评论
- 访客在昵称栏输入 QQ 号，会自动补全 QQ 昵称和 QQ 邮箱
- 访客填写数字 QQ 邮箱，会使用 QQ 头像作为评论头像
- 支持评论框粘贴图片（可禁用）
- 支持插入图片（可禁用）
- 支持去不图床、云开发图床
- 支持插入表情（可禁用）
- 支持 Ctrl + Enter 快捷回复
- 评论框内容实时保存草稿，刷新不会丢失
- 支持 [Katex](https://twikoo.js.org/faq.html#%E5%A6%82%E4%BD%95%E5%90%AF%E7%94%A8-katex-%E6%94%AF%E6%8C%81) 公式
- 支持按语言的代码高亮
<!-- endtab -->

<!-- tab 安全 -->

- 隐私信息安全（通过云函数控制敏感字段（邮箱、IP、环境配置等）不会泄露）
- 支持 Akismet 垃圾评论检测（需自行注册 [akismet.com](https://akismet.com/)）
- 支持腾讯云内容安全垃圾评论检测（需自行注册[腾讯云内容安全](https://cloud.tencent.com/login?s_url=https%3A%2F%2Fconsole.cloud.tencent.com%2Fcms%2Ftext%2Foverview)）
- 支持人工审核模式
- 防 XSS 注入
- 支持限制每个 IP 每 10 分钟最多发表多少条评论
<!-- endtab -->

<!-- tab 即时 -->

- 支持邮件提醒（访客和博主）
- 支持微信提醒（仅针对博主，基于 [Server 酱](https://sct.ftqq.com/upgrade?fr=sc)，需自行注册）
- 支持 QQ 提醒（仅针对博主，基于 [Qmsg 酱](https://qmsg.zendee.cn/)，需自行注册）
- 支持 QQ 提醒（针对博主 QQ 或者群，基于 [go-cqhttp](https://docs.go-cqhttp.org/)，需自己有服务器）
<!-- endtab -->

<!-- tab 个性 -->

- 支持自定义评论框背景图片
- 支持自定义“博主”标识文字
- 支持自定义通知邮件模板
- 支持自定义评论框提示信息（placeholder）
- 支持自定义表情列表（兼容 [OwO 的数据格式](https://cdn.jsdelivr.net/npm/owo@1.0.2/demo/OwO.json)）
- 支持自定义【昵称】【邮箱】【网址】必填 / 选填
- 支持自定义代码高亮主题
<!-- endtab -->

<!-- tab 便捷管理 -->

- 内嵌式管理面板，通过密码登录，可方便地查看评论、隐藏评论、删除评论、修改配置
- 支持隐藏管理入口，通过输入暗号显示
- 支持从 Valine、Artalk、Disqus 导入评论
<!-- endtab -->

<!-- tab 缺点 -->

- 不支持 IE
- 国外请求较慢
<!-- endtab -->

{% endtabs %}

## MongoDB 数据库

1. 申请 [MongoDB](https://www.mongodb.com/cloud/atlas/register) 账号，如下图所示：

![image-20240712141737041.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c60aad7b898c4002b42e2e5cd6aa463b~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854277&x-orig-sign=WkTGp3LsbDUE0iko%2B4khXuRlopc%3D)

2. 项目创建，如下图所示：

![image-20240711143753137.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2d68ab51d7f14d7f94e182f2c1852274~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854321&x-orig-sign=cj%2B7kVuvW6gEBJ7VArb6VLI4CDI%3D)

![image-20240711143912702.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f995581f655f4ef59ccc715e616dedae~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854430&x-orig-sign=iIpygu02qYTXQxio9soAXAZmuh0%3D)

1. 下图左上角选择项目，然后新建**免费集群**，区域推荐选择 `AWS / N. Virginia (us-east-1)`，如下图所示：

![image-20240711144139906.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/4827b1e9e50e4207b3a5667ba2b7fb7d~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854430&x-orig-sign=pR5ECQtgtQjvvGEIr2erluRR7%2B4%3D)

![image-20240712152112679.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9c7ee98fca34438aaec91cc95241d6e3~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720856758&x-orig-sign=zxv19UYT%2FxQsOBy3pIQvBaqg4wM%3D)

4. 点击 `Create Deployment`，配置连接集群信息，如下图所示：

![image-20240712152353692.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d8f68c4750294c5ea8f374feab93b2f0~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720856758&x-orig-sign=kPA8EiJqfz5LaUuLnCTKIgTdXqc%3D)

{% tabs connection %}

<!-- tab 网络权限 -->

点击 `Network Access` 链接更改并设置允许所有 `IP（0.0.0.0/0）`地址的连接，如下图所示：

![image-20240711150010538.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/124bc6b9825846cf9fd043cfb7af7869~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854631&x-orig-sign=uuOVUoBDvW2g9UlrKX%2FLf2ggiJo%3D)

<!-- endtab -->

<!-- tab 数据库权限 -->

创建集群的数据库用户，设置用户名和密码【密码需记住，后面需要】，**切记**：填写用户信息后，点击下面的 `Create Database User` 按钮添加用户，如下图所示：
![image-20240712152526257.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e9358452d4bb4843906589b0e9a5eb43~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720856758&x-orig-sign=%2FIUd2JPsgElbAjxyyafo5nRxxhE%3D)

<!-- endtab -->

<!-- tab 连接 -->

点击 `Choose a connection method`，选择 `Drivers` 连接方式，如下图所示：

![image-20240712150311568.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0797ef4c9dbe40678cc6ba77e5979378~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720855083&x-orig-sign=P0nYVJl64AOkkiMYJWGwwls4zrE%3D)

<!-- endtab -->

<!-- tab 连接字符串 -->

复制并保留你的连接字符串，后续 `Vercel` 部署环境变量需要使用，如下图所示：

![image-20240712143337833.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/1576077cf383472fb0706d2aad1c18c4~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854642&x-orig-sign=jXnLkeJlyfEmADKIAqSbRRlmDeM%3D)

<!-- endtab -->

{% endtabs %}

至此，我们已经完成了 `MongoDB` 数据库的创建和配置。下面我们将通过 `Vercel` 结合 `MongoDB` 一键部署 `Twikoo` 评论系统。

## Vercel 一键部署

- Vercel 是一个面向开发人员的平台，它提供工具、工作流和基础设施，帮助您更快地构建和部署 Web 应用程序，而不需要进行额外的配置
- Vercel 支持开箱即用的流行前端框架，其可伸缩、安全的基础设施遍布全球，以最佳速度为用户附近数据中心的内容提供服务

1. 申请 [Vercel](https://vercel.com/signup) 账号，可以选择 `Github` 账号来同步
2. 点击 [此链接](https://vercel.com/import/project?template=https://github.com/imaegoo/twikoo/tree/main/src/server/vercel-min) 将 `Twikoo` 一键部署到 `Vercel`，如下图所示：

![image-20240711150407170.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6f9722dfd2f64904b5ed53de7c669c5f~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854660&x-orig-sign=dktWAQEittw7Pd88q9YXx451tNg%3D)

3. 点击 `Create`，等待 `Deploy` 完成，如下图所示：

![image-20240711150515700.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b9628d8d5653421ca92459b4540baa6d~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854660&x-orig-sign=xCiVdnmHcnjLVSBzObPkPBAPc9s%3D)

1. 进入 `Settings` -> `Environment Variables`，添加环境变量 `MONGODB_URI`，值为上面 `MongoDB` 配置步骤 4 连接字符串处保留的信息【注意将字符串中用户密码替换】，配置完成后点击 `Save`，如下图所示：

![image-20240712144918073.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/febf851941a54150acdd64f61afd44b5~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854649&x-orig-sign=soYkOG4jR683F7Z3TCjOm1X4CTw%3D)

1. 进入 `Deployments`，然后在任意一项后面点击更多「三个点」，然后点击 `Redeploy` 重新部署，如下图所示：

![image-20240711151453763.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/eefd46f1aee24af5b06156f994618dc5~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854660&x-orig-sign=jHg0B65y4sEVC63mJBbXxWCsTCs%3D)

`Vercel Domains`（包含 `https://` 前缀，例如 `https://xxx.vercel.app`）即为下面主题配置 `twikoo` 所需的环境 `envId`

![image-20240711163943249.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/60b7bed091ee4b54ba001e9be7b510f8~tplv-73owjymdk6-watermark.image?policy=eyJ2bSI6MywidWlkIjoiMjk0NjM0Njg5NDc1OTMxOSJ9&rk3s=e9ecf3d6&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1720854683&x-orig-sign=qOH1aTdW%2Ba7AbKV%2B35fgZg0uy%2Bk%3D)

6. 在项目主题配置文件 `_config.butterfly.yml` 中修改以下内容，将你的环境 `id` 填入对应位置

```yml
# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId: https://xxx.vercel.app/ # 环境id
  region: # 环境地域，默认为 ap-shanghai，如果您的环境地域不是上海，需传此参数
  visitor: true # 是否显示文章閲读数
  option: # 可选配置
```

{% note info %}
重新编译运行，即可看到效果，点击评论区输入框下方的齿轮状按钮，设置你的管理密码，按照注解进行配置即可。
{% endnote %}

## 结语

通过上面的步骤，我们就可以在 `Hexo` 中通过 [Vercel](https://vercel.com/) + [MongoDB](https://www.mongodb.com/) 方案搭建 [Twikoo](https://twikoo.js.org/) 评论系统。希望本文对你有所帮助，如有疑问或建议，欢迎留言交流。
