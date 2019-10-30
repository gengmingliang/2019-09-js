var reg =/^[0-9a-z]$/
console.log(reg.test('1a'))
console.log(reg.test('a'))
console.log(reg.test('1'))
console.log(reg.test('a1a'))

console.log('==========================================')
var reg2 =/^\d$///以一个数字开头 并且还得以这个数字结束 意思是只能有一个数字
console.log(reg2.test(11))//false

console.log('==========================================')
var reg3 =/^18|19$/
var reg_1 =/[11-99]/
var reg_2 =/[a-z]/


console.log('==========================================')
var reg4 =/\d/
console.log(reg4.test(''))
console.log(reg4.test('1'))
console.log(reg4.test('123'))
console.log(reg4.test('q'))
console.log(reg4.test('q1'))

var reg4_1 =/\d?///有0到1的数字
console.log(reg_1.test(''))
console.log(reg_1.test('1'))
console.log(reg_1.test('123'))
console.log(reg_1.test('q'))
console.log(reg_1.test('q1'))

var reg4_2 =/\d*///有0到多个数字
console.log(reg4_2.test(''))
console.log(reg4_2.test('1'))
console.log(reg4_2.test('123'))
console.log(reg4_2.test('q'))
console.log(reg4_2.test('q1'))

var reg4_3 =/\d+///有1到多个数字
console.log(reg4_3.test(''))
console.log(reg4_3.test('1'))
console.log(reg4_3.test('123'))
console.log(reg4_3.test('q'))
console.log(reg4_3.test('q1'))


var reg5 = /^\d$/
console.log(reg5.test('11'))// false


var reg5_1 = /^\d+$/
console.log(reg5_1.test('11')) // true
console.log(reg5_1.test('12')) // 
console.log(reg5_1.test('113')) // 
console.log(reg5_1.test('11qw3')) // 

var reg5_1 = /^6+$/
console.log(reg5_1.test('616')) //
console.log(reg5_1.test('6666')) // 
console.log(reg5_1.test('66')) //



var reg7 =/^\d{3}$///连续三个数字  中间不能有其他字符
console.log(reg7.test('1234'))
console.log(reg7.test('珠峰2019'))
console.log(reg7.test('珠峰2019第9期'))
console.log(reg7.test('12'))
console.log(reg7.test('你6你6你6'))
console.log(reg7.test('666'))
console.log(reg7.test('123'))
