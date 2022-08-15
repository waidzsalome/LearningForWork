# <div style="width: 10px;height: 10px;background: red; display:inline-block" ></div>src 和 href 的区别

- href 是`Hypertext Reference`的简写，表示超文本引用，指向网络资源所在位置;当浏览器遇到 href 不会停止对当前文档的处理；href 用于在当前文档和引用资源之间确立联系

```html
<a href="http://www.baidu.com"></a>
<link type="text/css" rel="stylesheet" href="common.css" />
```

- src 是`source`的简写，表示引用外部资源;当浏览器解析到 src ，会暂停其他资源的下载和处理，直到将该资源加载或执行完毕；src 用于替换当前内容

```html
<img src="img/girl.jpg">
<iframe src="top.html">
<script src="show.js">
```

# <div style="width: 10px;height: 10px;background: red; display:inline-block" ></div> 对 HTML 语义化的理解

# DOCTYPE（文档类型）的作用

# <div style="width: 10px;height: 10px;background: red; display:inline-block" ></div>script 标签中 defer 和 async 的区别

- 见 js 的内容

# 常用的 meta 标签有哪些

# <div style="width: 10px;height: 10px;background: red; display:inline-block" ></div>HTML5 有哪些更新

- 新增语义化标签
- 新增多媒体标签：可以很方便的嵌入音视频
  - 音频标签`audio`
  - 视频标签`video`
- 新增表单标签
  - 表单类型
  - 表单属性
  - 表单事件
- 进度条、度量器
  - progress 属性
- DOM 查询操作
  - `document.querySelector()`
  - `document.querySeletcorAll()`
- Web 存储
  - localStorage
  - sessionStorage
- 其他
  - 拖放
  ```html
  <img draggable="true" />
  ```
  - canvas
  - svg
  - 移除的元素

# img 的 srcsets 属性

# <div style="width: 10px;height: 10px;background: red; display:inline-block" ></div>行内元素有哪些？块级元素有哪些？空（void 元素有哪些？）

- 行内元素:`a b span img input select strong`
- 块级元素:`div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p`
- 空元素（没有内容的标签，自闭合）:`<br> <hr> <img> <input> <link> <meta>`

# 说一下 web worker

# HTML5 的离线储存怎么使用？它的工作原理

# 浏览器是如何对 HTML5 的离线储存资源进行管理和加载的

# title 和 h1 的区别、b 和 strong 的区别、i 和 em 的区别

# iframe 有哪些优点和缺点

# label 的作用是什么？如何使用？

# Canvas 和 svg 的区别

# head 标签有什么作用，其中什么标签必不可少

# 文档声明（Doctype）和 `<!DOCTYPE html>`有何作用

# 浏览器乱码的原因？如何解决？

# 渐进增强和优雅降级之间的区别

# 说一下 HTML drag API
