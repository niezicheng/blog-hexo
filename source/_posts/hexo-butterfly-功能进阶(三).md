---
title: Hexo Butterfly 功能进阶教程(三)
abbrlink: b86e2546
date: 2024-07-22 11:11:48
tags:
  - 教程
  - Hexo
---

## 音乐

> 官方教程：[Butterfly 添加全局吸底 Aplayer 教程](https://butterfly.js.org/posts/507c070f/)

### 全局吸底 Aplayer

{% hideToggle 预览效果,#e8fafe,#4b4948 %}

![fix-aplayer.webp](https://niezicheng.github.io/files/images/hexo/fix-aplayer.webp)

{% endhideToggle %}

{% hideToggle 实现步骤,#fff8e8,#4b4948 %}

1. 安装 `Aplayer` 插件 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

```zsh
npm install hexo-tag-aplayer --save
```

2. 关闭 `asset_inject`，在项目根目录的 `_config.yml` 中添加配置如下：

由于需要全局都插入 `aplayer` 和 `meting` 资源，为了防止插入重复的资源，需把 `asset_inject` 设为 `false`。

```yml
# aplayer
aplayer:
  meting: true
  asset_inject: false
```

3. 在主题配置文件 `_config.butterfly.yml` 中开启 `Aplayer` 配置，如下所示：

```yml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```

4. 插入 `Aplayer` 标签，如下所示：

```html
<div
  class="aplayer no-destroy"
  data-id="7427714271"
  data-server="netease"
  data-type="playlist"
  data-fixed="true"
  data-mini="true"
  data-listFolded="false"
  data-order="random"
  data-lrctype="1"
  data-preload="none"
  data-autoplay="true"
  data-theme="#febcd5"
  muted
></div>
```

参数详细说明请参考 [Aplayer 配置参数](https://github.com/MoePlayer/hexo-tag-aplayer?tab=readme-ov-file#meingjs-support-new-in-30)。

{% endhideToggle %}

### 音乐页面

{% hideToggle 预览效果,#e8fafe,#4b4948 %}

![meting-page.webp](https://niezicheng.github.io/files/images/hexo/meting-page.webp)

{% endhideToggle %}

{% hideToggle 实现步骤,#fff8e8,#4b4948 %}

1. 创建音乐页面，新建 `source/music/index.md` 文件，执行下面命令：

```zsh
hexo new page music
```

2. 菜单导航配置，修改主题配置文件 `_config.butterfly.yml`，添加音乐菜单导航配置，如下所示：

```yml
# Menu 目录
menu:
  娱乐 || fa fa-heartbeat:
    音乐: /music/ || fas fa-music
```

3. 音乐页面配置，修改 `source/music/index.md` 文件，内容如下：

```markdown
{% meting "697054881" "netease" "playlist" "theme:"#febcd5" %}
```

更多用法请阅读 [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) 文档。

{% endhideToggle %}

## 图库

{% hideToggle 预览效果,#e8fafe,#4b4948 %}

### GalleryGroup 图库

![gallery-group.webp](https://niezicheng.github.io/files/images/gallery/gallery-group.webp)

### Gallery 相册

![gallery-wallpaper.webp](https://niezicheng.github.io/files/images/gallery/gallery-wallpaper.webp)

{% endhideToggle %}

{% hideToggle 实现步骤,#fff8e8,#4b4948 %}

### GalleryGroup 图库

1. 创建图库页面，新建 `source/gallery/index.md` 文件，执行下面命令：

```zsh
hexo new page gallery
```

2. 菜单导航配置，修改主题配置文件 `_config.butterfly.yml`，添加音乐菜单导航配置，如下所示：

```yml
# Menu 目录
menu:
  娱乐 || fa fa-heartbeat:
    图库: /gallery/ || fas fa-images
```

#### 用法描述

```markdown
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

| 参数        | 是否必填 | 类型   | 说明         |
| ----------- | -------- | ------ | ------------ |
| name        | 是       | String | 图库名称     |
| description | 是       | String | 图库描述     |
| link        | 是       | String | 图库地址链接 |
| img-url     | 否       | String | 图库封面链接 |

#### 内容展示

```markdown
<div class="gallery-group-main">
{% galleryGroup 'Wallpaper' '壁纸资源' '/gallery/wallpaper' https://xxx/wallhaven-werdv6.webp %}
{% galleryGroup 'Second Dimension' '二次元' '/gallery/second-dimension' https://xxx/wallhaven-z81qyy.webp %}
</div>
```

#### 效果预览

![gallery-group.webp](https://niezicheng.github.io/files/images/gallery/gallery-group.webp)

更多用法请阅读 [galleryGroup](https://butterfly.js.org/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A%E5%9C%96%E5%BA%AB)。

<!-- endtab -->

### Gallery 相册

创建图库详情 `wallpaper` 页面，新建 `source/gallery/wallpaper/index.md` 文件，执行下面命令：

{% tabs gallery %}

<!-- tab 本地 -->

#### 用法描述

```markdown
{% gallery [lazyload],[rowHeight],[limit] %}
```

| 参数      | 是否必填 | 类型    | 默认值 | 说明                                                           |
| --------- | -------- | ------- | ------ | -------------------------------------------------------------- |
| lazyload  | 否       | Boolean | false  | 点击按钮加载更多图片。                                         |
| rowHeight | 否       | Number  | 220    | 图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。 |
| limit     | 否       | Number  | 10     | 每次加载多少张照片。                                           |

#### 内容展示

```markdown
{% gallery %}
![wallhaven-werdv6.webp](https://xxx/wallhaven-werdv6.webp)
![wallhaven-2fd962.webp](https://xxx/wallhaven-2fd962.webp)
![wallhaven-6oqgk7.webp](https://xxx/wallhaven-6oqgk7.webp)
![wallhaven-8o5922.webp](https://xxx/wallhaven-8o5922.webp)
![wallhaven-9f1cd0.webp](https://xxx/wallhaven-9f1cd0.webp)
![wallhaven-72yzje.webp](https://xxx/wallhaven-72yzje.webp)
{% endgallery %}
```

<!-- endtab -->

<!-- tab 远程 -->

#### 用法描述

{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}

```markdown
| 参数      | 是否必填 | 类型    | 默认值 | 说明                                                           |
| --------- | -------- | ------- | ------ | -------------------------------------------------------------- |
| url       | 是       | String  | -      | 识别词。                                                       |
| link      | 是       | String  | -      | 远程的 json 链接。                                             |
| lazyload  | 否       | Boolean | false  | 点击按钮加载更多图片。                                         |
| rowHeight | 否       | Number  | 220    | 图片显示的高度，如果需要一行显示更多的图片，可设置更小的数字。 |
| limit     | 否       | Number  | 10     | 每次加载多少张照片。                                           |
```

远程 `json` 文件，内容格式如下：

```json
[
  {
    "url": "https://w.wallhaven.cc/full/we/wallhaven-werdv6.png", // 图片链接, 必填
    "alt": "IMG_0556.jpg", // 图片描述, 可选
    "title": "这是title"， // 图片标题, 可选
  }
]
```

#### 内容展示

```markdown
{% gallery url, https://xxx.com/xxx.json %}
{% endgallery %}
```

<!-- endtab -->

{% endtabs %}

#### 效果预览

![gallery-wallpaper.webp](https://niezicheng.github.io/files/images/gallery/gallery-wallpaper.webp)

{% endhideToggle %}

## 卡通人物

{% hideToggle 预览效果,#e8fafe,#4b4948 %}

![live2d-shizuku.webp](https://niezicheng.github.io/files/images/hexo/live2d-shizuku.webp)

{% endhideToggle %}

{% hideToggle 实现步骤,#fff8e8,#4b4948 %}

{% tabs modal %}

<!-- tab 多模型（推荐）-->

如果你只需要基本功能，可以直接将下面 `html` 插入到你的页面中即可，不需要安装插件。更多其它定制化功能请参考 [live2d-widget](https://github.com/stevenjoezhang/live2d-widget)

```html
<script src="https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
```

<!-- endtab -->

<!-- tab 单模型 -->

1. 安装 `live2d` 模型（看版娘）插件 [hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)【很久不更新啦】，执行下面命令：

```zsh
npm install hexo-helper-live2d --save
```

2. 下载指定看板娘模型，这边以 `live2d-widget-model-shizuku` 模型为例，执行下面命令：

```zsh
npm install live2d-widget-model-shizuku --save
```

更多模型请参考 [live2d-widget-models](https://github.com/xiazeyu/live2d-widget-models)

<!-- endtab -->

{% endtabs %}

{% endhideToggle %}

## 鼠标移动特效

{% hideToggle 实现步骤,#fff8e8,#4b4948 %}

1. 在项目根目录下 `source` 文件下新建 `js/star-canvas.js` 文件，内容如下：

```js
/**
 * 鼠标滑动生成星星特效
 */
const startCanvas = () => {
  window.addEventListener("load", () => {
    var canvas = document.querySelector("#star-canvas");
    var ctx = canvas.getContext("2d");
    window.onresize = resizeCanvas;
    // 设置画布大小
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    // 设置画布样式
    canvas.style.cssText = `
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
    `;

    var arr = [];
    var colours = ["#ec4c8c", "#f47466", "#a4d8fa", "#ff9900", "#febcd5"];
    // 鼠标移动事件
    window.addEventListener("mousemove", (e) => {
      arr.push({
        x: e.clientX,
        y: e.clientY,
        r: Math.random() * 0.5 + 1.5,
        td: Math.random() * 4 - 2,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 1 + 1,
        rot: Math.random() * 90 + 90,
        color: colours[Math.floor(Math.random() * colours.length)],
      });
    });

    // 绘制星星
    function star(x, y, r, l, rot) {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(
          Math.cos(((18 + i * 72 - rot) * Math.PI) / 180) * r + x,
          -Math.sin(((18 + i * 72 - rot) * Math.PI) / 180) * r + y
        );
        ctx.lineTo(
          Math.cos(((54 + i * 72 - rot) * Math.PI) / 180) * l + x,
          -Math.sin(((54 + i * 72 - rot) * Math.PI) / 180) * l + y
        );
      }
      ctx.closePath();
    }

    // 绘制
    function draw() {
      for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        star(temp.x, temp.y, temp.r, temp.r * 3, temp.rot);
        ctx.fillStyle = temp.color;
        ctx.strokeStyle = temp.color;
        ctx.lineWidth = 0.1;
        ctx.lineJoin = "round";
        ctx.fill();
        ctx.stroke();
      }
    }

    // 更新
    function update() {
      for (let i = 0; i < arr.length; i++) {
        arr[i].x += arr[i].dx;
        arr[i].y += arr[i].dy;
        arr[i].rot += arr[i].td;
        arr[i].r -= 0.015;
        if (arr[i].r < 0) {
          arr.splice(i, 1);
        }
      }
    }

    // 定时器
    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      update();
    }, 20);
  });
};
// 启动
startCanvas();
```

2. 在主题配置文件 `_config.butterfly.yml` 中引入 `star-canvas.js` 文件，如下所示：

```yml
inject:
  head:
    # 自定义覆盖样式
  bottom:
    # 鼠标滑动星星特效
    - <canvas id="star-canvas"></canvas>
    - <script src="/blog-hexo/js/star-canvas.js"></script>
```

{% endhideToggle %}
