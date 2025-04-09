---
title: Frequent Interview Questions
date: 2024-07-30 11:31:49
---

## 1、频率高的前端八股文面试题

### 从浏览器地址栏输入 URL 后，到页面渲染出来，整个过程都发生了什么？

- [细说浏览器输入 URL 后发生了什么](https://juejin.cn/post/6844904054074654728)
- [浏览器渲染机制](https://febook.hzfe.org/awesome-interview/book2/browser-render-mechanism)

#### 浏览器的缓存机制

- [实践这一次,彻底搞懂浏览器缓存机制](https://juejin.cn/post/6844903764566999054)
- [深入理解浏览器的缓存机制](https://juejin.cn/post/6844904023665934349)

#### 浏览器拓展

- [从一道面试题，构建性能优化知识体系【网络篇】](https://juejin.cn/post/6958694686689067038)
- [浏览器渲染流程和性能优化【万字长文，超详细】](https://juejin.cn/post/6969494172151578660)

### 闭包、作用域、原型链

#### 闭包

- [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.cn/post/6844903474212143117)

#### 作用域

- [JavaScript 深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)

#### 原型链

- [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
- [JavaScript 深入之从原型到原型链](https://github.com/mqyqingfeng/Blog/issues/2)

### JS 垃圾回收机制

- [认识 V8 引擎](https://zhuanlan.zhihu.com/p/27628685)
- [JavaScript 中的垃圾回收和内存泄漏](https://juejin.cn/post/6844903833387155464)
- [V8 引擎垃圾内存回收原理解析](https://juejin.cn/post/6844903993420840967)

### 事件循环

- [最后一次搞懂 Event Loop](https://juejin.cn/post/6844903827611598862)
- [微任务、宏任务与 Event-Loop](https://juejin.cn/post/6844903657264136200)
- [浏览器与 Node 的事件循环(Event Loop)有何区别?](https://juejin.cn/post/6844903761949753352)

### 事件委托

- [你真的理解 事件冒泡 和 事件捕获 吗？](https://juejin.cn/post/6844903834075021326)

### 跨域问题

- [九种跨域方式实现原理（完整版）](https://juejin.cn/post/6844903767226351623)
- [前端常见跨域解决方案（全）](https://segmentfault.com/a/1190000011145364)

### 前端安全知识(XSS、 CSRF)

#### XSS

- [前端安全系列（一）：如何防止 XSS 攻击？](https://tech.meituan.com/2018/09/27/fe-security.html)
- [4 类防御 XSS 的有效方法](https://www.jianshu.com/p/599fcd03fd3b)

#### CSRF

- [前端安全系列（二）：如何防止 CSRF 攻击？](https://tech.meituan.com/2018/10/11/fe-security-csrf.html)

#### 安全知识拓展

- [前端也需要了解的 JSONP 安全](https://juejin.cn/post/6844903660678299661)
- [【面试篇】寒冬求职之你必须要懂的 Web 安全](https://juejin.cn/post/6844903842635579405)

### get 请求和 post 请求的区别

- [都 9102 年了，还问 GET 和 POST 的区别](https://segmentfault.com/a/1190000018129846)
- [为什么要禁止除 GET 和 POST 之外的 HTTP 方法？](https://www.freebuf.com/articles/web/172695.html)

### Commonjs 和 ES 规范的区别

- [聊聊什么是 CommonJs 和 Es Module 及它们的区别](https://juejin.cn/post/6938581764432461854)
- [前端模块化详解(完整版)](https://juejin.cn/post/6844903744518389768)
- [ES6 的模块加载，你们真的完全懂了吗？](https://juejin.cn/post/7001671927836180487)

### webpack 和 vite 的区别

- [面试常问：为什么 Vite 速度比 Webpack 快？](https://juejin.cn/post/7344916114204049445)

### CDN 的原理

- [漫话：如何给女朋友解释什么是 CDN？](https://juejin.cn/post/6844903906296725518)

## 2、手写代码题

### 实现一个深拷贝

- [浅拷贝与深拷贝](https://juejin.cn/post/6844904197595332622)
- [深拷贝的终极探索（90%的人都不知道）](https://juejin.cn/post/6844903692756336653)
- [深入剖析 JavaScript 的深复制](https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)

### 实现 lodash 的 get 方法

- [如何实现 lodash.get 函数及可选链操作简化取值](https://segmentfault.com/a/1190000021799343)

### 实现一个防抖/节流函数

```ts
// 防抖函数
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

// 节流函数
function throttle(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) return;
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = null;
      }, delay);
    }
  };
}
```

## 3、框架及原理篇

### Promise 原理解析

[9k 字 | Promise/async/Generator 实现原理解析](https://juejin.cn/post/6844904096525189128)

### 3.1、React

- [React 类组件和函数组件的本质区别](https://github.com/jappp/Blog/issues/12)
- [面试官问: 如何理解 Virtual DOM？](https://juejin.cn/post/6844903921442422791)
- [「react 进阶」一文吃透 react-hooks 原理](https://juejin.cn/post/6944863057000529933)
- [react setState 核心实现原理](https://zhuanlan.zhihu.com/p/44537887)
- [【React 深入】从 Mixin 到 HOC 再到 Hook](https://juejin.cn/post/6844903815762673671)

#### React 周边原理

- [「源码解析 」这一次彻底弄懂 react-router 路由原理](https://juejin.cn/post/6886290490640039943)
- [一幅图明白 React-Redux 的原理](https://juejin.cn/post/6844903589953929229)
- [8k 字 | Redux/react-redux/redux 中间件设计实现剖析](https://juejin.cn/post/6844904036013965325)
- [Mobx 思想的实现原理，及与 Redux 对比](https://zhuanlan.zhihu.com/p/25585910)

#### React 原理

- [React 事件系统工作原理](https://juejin.cn/post/6909271104440205326)
- [深入理解 React：懒加载（lazy）实现原理](https://juejin.cn/post/6844904191853494280)

#### React 源码解析

- [《React 源码解析》系列完结！(v15)](https://juejin.cn/post/6844903568487497741)
- [React 源码解析(v16)](https://react.jokcy.me/)
- [React Fiber 源码解析](https://juejin.cn/post/6859528127010471949)
- [React 源码剖析系列 － 不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
- [浅入浅出图解 domDIff](https://juejin.cn/post/6844903592520843277)

#### React 拓展

- [React 技术揭秘](https://react.iamkasong.com/)
- [React 开发必须知道的 34 个技巧【近 1W 字】](https://juejin.cn/post/6844903993278201870)
- [[译] React 18 新特性概览](https://juejin.cn/post/7014683796821770247)

### 3.2、Vue

- [（建议收藏）Vue3 对比 Vue2.x 差异性、注意点、整体梳理，与 React hook 比又如何？（面试热点）](https://juejin.cn/post/6892295955844956167)
- [你真的理解$nextTick 么](https://juejin.cn/post/6844903843197616136)

#### Vue 原理

- [Vue.js 的 computed 和 watch 是如何工作的？](https://juejin.cn/post/6844903667884097543)
- [不好意思！耽误你的十分钟，让 MVVM 原理还给你](https://juejin.cn/post/6844903586103558158)
- [50 行代码的 MVVM，感受闭包的艺术](https://juejin.cn/post/6844903619808985095)

#### Vue 源码解析

- [详解 vue 的 diff 算法](https://juejin.cn/post/6844903607913938951)

#### Vue 拓展

- [Vue3 script setup 语法糖详解](https://juejin.cn/post/7009282373476941831)
- [Vue 面试题及汇总](https://jackniu81.github.io/2021/04/12/Vue-js-Interview-Questions-and-Answers-2021/)
- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
