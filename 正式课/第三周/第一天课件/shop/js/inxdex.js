//第一步 获取后台数据  共四步
//1、创建一个新实例
//2、获取后台路径
//3、监听状态
//4、发送请求
let dataAry
let xhr = new XMLHttpRequest()
xhr.open('get', './data.json', false)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        //代表请求成功
        //xhr.response 是从后台获取到的JSON 字符串
        //JSON.parse是把json的字符串转成json对象
        let data = JSON.parse(xhr.response)
        dataAry = data
    }
}
xhr.send()
// dataAry就是从后台获取到的数组

// 第二步 把获取到的数据渲染到页面上
let mainBox = document.querySelector('main')
function renderHtml(ary) {
    let str = ''//用来拼接DOM解构字符串
    ary.forEach(item => {
        let { img, title, num, price } = item
        str += ` <div class="good_box">
        <div class="img_box">
            <img src="${img}"
                alt="">
        </div>
        <div class="desc">${title}</div>
        <div class="price">￥${price.toFixed(2)}</div>
        <div class="bot_box">
            <div class="left_box">选购</div>
            <div class="rigth_box">评价数${num}</div>
        </div>
    </div>`
    })
    mainBox.innerHTML = str
}
renderHtml(dataAry)

let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn')

let flag = 1
timeBtn.onclick = function () {
    flag *= -1
    //把数据类型按照上架时间进行展示
    dataAry.sort((a, b) => {
        return (a.time - b.time) * flag
    })
    renderHtml(dataAry)
}
priceBtn.onclick = function () {
    flag *= -1
    //把数据类型按照上架时间进行展示
    dataAry.sort((a, b) => {
        return (a.price - b.price) * flag
    })
    renderHtml(dataAry)
}
commentBtn.onclick = function () {
    flag *= -1
    //把数据类型按照上架时间进行展示
    dataAry.sort((a, b) => {
        return (a.num - b.num) * flag
    })
    renderHtml(dataAry)
}

//操作dom排序
// let timeBtn = document.querySelector('.timeBtn'),
//     priceBtn = document.querySelector('.priceBtn'),
//     commentBtn = document.querySelector('.commentBtn')

// let goodbox = document.getElementsByClassName('good_box')

// // 元素.getAttribute('行内属性名')  获取行内属性用的
// // 元素.setAttribute('行内属性名'，'对应的属性值') 设置行内属性用的
// timeBtn.flag = 1
// timeBtn.onclick = function () {
//     //按照时间排序
//     // 怎么获取时间 或每一个good_box 在这个元素上有一个 dataset的属性
//     this.flag *= -1
//     let ary = [...goodbox].sort((a, b) => {
//         return (a.dataset.time - b.dataset.time) * this.flag
//     })
//     ary.forEach(item=>{
//         mainBox.appendChild(item)
//     })
// }
