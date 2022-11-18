# aidefanqie

## 在线预览

* demo已托管到github服务器，如果觉得本地启动麻烦，**可以直接点击链接进行预览**，不过基于github服务器在国外，可能会有点卡，或者是图片加载不出来之类的，这点待优化
* https://aliveseven.github.io/VueGameDemo/dist/index.html

## 笔试结果

* 基本实现了Web端UI布局，对不同的屏幕宽度作出相对应的调整，适配移动端。
* **实现笔试要求的交互效果**
* **实现笔试要求的动画效果**
* 根据实际功能拆分了好几个组件
* 这个小demo是用vite+vue3+pinia+ts实现，大概花费一天左右的时间

## 项目启动

* 解压项目到文件夹，到项目的目录下面执行下面的代码

### 先是执行下面这行代码

```sh
npm install
```

### 当基本的包安装完之后，运行下面这行代码

```sh
npm run dev
```

### 项目打包用以下这个代码

```sh
npm run build
```

### 通过vitest测试

```sh
npm run test:unit
```
