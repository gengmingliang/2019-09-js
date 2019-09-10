
let dataAry
//把数据从后台获取到 然后渲染到界面上
let xhr = new XMLHttpRequest()
xhr.open('get', './data.json', false);
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let data = JSON.parse(xhr.response)//把从后台获取到的json字符串转成json对象
        dataAry = data
    }
}
xhr.send()

let mainbox = document.querySelector('main')
//datAary就是从后台获取到的数据
function randerHtml(ary) {
    let str = ''//用来拼接字符串的
    ary.forEach(item => {
        //item 是数组中的每一项
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
            <div class="right_box">评价数${num}</div>
        </div>
    </div>`
    })

    //str就是拼接好的字符串
    mainbox.innerHTML = str
}
randerHtml(dataAry)
let timeBtn = document.querySelector('.timeBtn'),
    priceBtn = document.querySelector('.priceBtn'),
    commentBtn = document.querySelector('.commentBtn')


//操作数据 ：先把数据按需排序 然后重新渲染数据
let flag = 1
timeBtn.onclick = function () {
    //把数据按照上架时间进行排序
    flag *= -1
    dataAry.sort((a, b) => {
        return (a.time - b.time)*flag
    })
    randerHtml(dataAry)
}
priceBtn.onclick = function () {
    //把数据按照上架时间进行排序
    flag *= -1
    dataAry.sort((a, b) => {
        return (a.price - b.price)*flag
    })
    randerHtml(dataAry)
}
commentBtn.onclick =function(){
     //把数据按照上架时间进行排序
     flag *= -1
     dataAry.sort((a, b) => {
         return (a.num - b.num)*flag
     })
     randerHtml(dataAry)
}
