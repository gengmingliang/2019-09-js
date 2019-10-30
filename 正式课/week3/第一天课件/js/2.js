var olis = document.getElementsByTagName('li')
Object.prototype.trans = function () {
    //this就是我们要去转化的类数组
    return [...this]
    return Array.from(this)
    return [].slice.call(this)
}
var lis = olis.trans()

//从数组或者类数组中随机删除几项返回删除项组成的新数组
Object.prototype.rm = function (n) {
    ''
    //this.length和 n的情况
    if (n > this.length) {
        throw new Error('删除个数不合法')
    }


    // 随机删除n项
    // splice 删除某一(Math.round(Math.random()*(this.length-1)))项
    // splice的操作需要执行n次
    let ary = []
    let temp = [...this]
    for (var i = 0; i < n; i++) {
        let m = Math.round(Math.random() * (temp.length - 1))
        ary = ary.concat([...this].splice(m, 1))
    }
    return ary
}
console.log([1, 2, 3, 4, 5].rm(4))

Array.prototype.unique = function () {
    //双for去重 每一轮都用当前项跟后边每一项去比较 相等就把后边的项删除掉 注意数组塌陷
    // 对象去重 利用对象的属性名重复的特点
    // indexOf lastIndexOf 合起来使用的去重 看当前的indexof 和lastindexof 是否相等 相等说明不重复
    var temp = new Set(this)
    return [...temp]
}
String.prototype.getParame = function (key) {
    var str = this.split('?')[1]
    var ary = str.split('&')
    var obj = {}
    ary.forEach((item) => {
        //item 是一些 'a=12'  'b=13'之类的字符串
        var arr = item.split('=')
        obj[arr[0]] = arr[1]
    })
    if(key){
        return obj[key]
    }
    return obj
}
var str = 'https://www.souyidai.com/p2p?id=3964660765015&a=12&b=23'
console.log(str.getParame('id'));
console.log(str.getParame('a'));
console.log(str.getParame('b'));
console.log(str.getParame());