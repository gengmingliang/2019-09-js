RegExp.prototype.execAll = function (str = '') {
    var reg = this
    if (!reg.global) {
        //正则没有修饰符g 需要我们补一个g
        reg = eval(reg.toString() + 'g')
    }
    //怎么保证str是字符串
    str = str.toString()
    // this --> reg2
    var res = reg.exec(str)
    var ary = []
    while (res) {
        ary.push(res)
        res = reg.exec(str)//每次while循环都要更新res
    }
    return ary
}