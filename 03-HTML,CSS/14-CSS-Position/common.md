# 신승윤 common 예제 실습

## 2022-03-7

### HTML
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/common.css" />    
    <title>Document</title>
</head>
<body>
    <div class="container">
        <div class="logo">logo</div>
        <div class="side1">side1</div>
        <div class="side2">side2</div>
    </div>
</html>
```
### CSS
```css
* { padding: 0; margin: 0; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-left { text-align: left; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.pull-left { float: left; }
.pull-right { float: right; }
.clearfix:after { content: ''; display: block; clear: both; float: none; }


.container {
    width: 1000px;
    background-color: #eee;
    margin: auto;
    position: relative;
    height: 150px;
}

.logo {
    width: 300px;
    height: 100px;
    background-color: #ff6600;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -50px;

}

.side1 {
    width: 80px;
    height: 80px;
    background-color: #ff00ff;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -240px;
    margin-top: -40px;
}

.side2 {
    width: 80px;
    height: 80px;
    background-color: #00ff00;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: 160px;
    margin-top: -40px;
}
```

### 실행 결과
![img](%EC%98%88%EC%A0%9C.png)