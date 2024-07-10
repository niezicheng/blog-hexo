/**
 * 下雪·背景·特效
 */
const snowBackground = () => {
  const canvasDOM = document.createElement("canvas");
  canvasDOM.id = "snow-canvas";
  document.body.appendChild(canvasDOM);

  var canvas = document.getElementById("snow-canvas");
  var ctx = canvas.getContext("2d");
  canvas.style.cssText = `
    position: fixed;
    z-index: 1000;
    pointer-events: none;
    top: 0;
    left: 0;
  `;

  /* 定义x为窗口宽度，y为窗口高度 */
  var x = 0,
    y = 0;
  /* 定义数组，是为了存储每一片雪与雪花的信息 */
  var arr = [];
  /* 假设有300片雪 */
  var num = 300;

  /* 绑定窗口大小发生改变事件，让 canvas 随时铺满浏览器可视区 */
  window.onresize = resizeCanvas;
  function resizeCanvas() {
    x = canvas.width = window.innerWidth;
    y = canvas.height = window.innerHeight;
  }
  resizeCanvas();

  for (let i = 0; i < num; i++) {
    arr.push({
      x: x * Math.random(),
      y: y * Math.random(),
      r: Math.random() * 5,
      color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)}, ${Math.random()})`,
    });
  }
  /* 创建 image 元素 */
  var img = new Image();
  /* 设置雪花的地址，只有雪花是用图片表示 */
  img.src = "/blog-hexo/img/snow.webp";

  function draw() {
    /* 遍历数组 */
    for (let i = 0; i < num; i++) {
      var yuan = arr[i];
      /* 创建路径 */
      ctx.beginPath();
      /* 给雪设置颜色 */
      ctx.fillStyle = yuan.color;
      /* 绘制雪 */
      ctx.arc(yuan.x, yuan.y, yuan.r, 0, 2 * 3.14, false);
      /* 如果i % 30 == 0才绘制雪花，雪花不用太多 */
      if (i % 30 == 0) {
        /* 绘制雪花图片 */
        ctx.drawImage(img, yuan.x, yuan.y, yuan.r * 10, yuan.r * 10);
      }
      /* 填充路径 */
      ctx.fill();
    }
  }

  function updated() {
    for (let i = 0; i < num; i++) {
      var yuan = arr[i];
      /* x轴位置+0.1，变化小点 */
      yuan.x = yuan.x + 0.1;
      /* y轴位置+自身半径一半，这样越大的学走越快 */
      yuan.y = yuan.y + yuan.r / 2;
      /* 如果学已经走出窗口 */
      if (yuan.y > y) {
        /* 重新给雪数组赋值 */
        arr[i] = {
          x: x * Math.random(),
          y: -10,
          r: Math.random() * 5,
          color: `rgba(${Math.floor(Math.random() * 255)},${Math.floor(
            Math.random() * 255
          )},${Math.floor(Math.random() * 255)}, ${Math.random()})`,
        };
      }
    }
  }
  setInterval(function () {
    /* 清屏 */
    ctx.clearRect(0, 0, x, y);
    /* 绘制 */
    draw();
    /* 更新 */
    updated();
  }, 10);
};

/**
 * 鼠标滑动生成星星特效
 */
const startCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.id = "star-canvas";
  document.body.appendChild(canvas);

  window.addEventListener("load", () => {
    var canvas = document.querySelector("#star-canvas");
    var ctx = canvas.getContext("2d");
    window.onresize = resizeCanvas;
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    canvas.style.cssText = `
      position: fixed;
      z-index: 1000;
      pointer-events: none;
      top: 0;
      left: 0;
    `;

    var arr = [];
    var colours = ["#ec4c8c", "#f47466", "#a4d8fa", "#ff9900", "#febcd5"];

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

    setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw();
      update();
    }, 20);
  });
};

snowBackground();
startCanvas();
