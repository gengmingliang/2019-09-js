var reg =/\d/
console.log(reg.test('你好'))//查看后边的字符串中有没有满足正则的字符
console.log(reg.test('你好25486'))

console.log('====================')
var reg2 =/\D/
console.log(reg2.test('你好'))
console.log(reg2.test('你好25486'))

console.log('====================')
var reg3 =/\w/
console.log(reg3.test('你好'))
console.log(reg3.test('你好25486'))

console.log('====================')
var reg3 =/\W/
console.log(reg3.test('你好'))
console.log(reg3.test('你好25486'))

console.log('====================')
var reg4 =/^\d/
console.log(reg4.test('你好'))
console.log(reg4.test('你好25486'))

console.log('====================')
var reg5 =/\d$/
console.log(reg5.test('你好'))
console.log(reg5.test('你好25486'))

console.log('====================')
var reg6 =/\./
console.log(reg6.test('123'))
console.log(reg6.test('12.3'))
console.log(reg6.test('eqwetqds'))

console.log('====================')
var reg7 =/[ab]/ //字符串含有a或b的
console.log(reg7.test('ahello'))
console.log(reg7.test('hello'))
console.log(reg7.test('hello b'))
console.log(reg7.test('hello ab'))

console.log('====================')
var reg8 =/[0-9a-zA-z]/
var reg8_2 =/[0-z]/
console.log(reg8.test('aBc'))
console.log(reg8.test('6aBc'))
console.log(reg8.test('_'))
console.log(reg8.test('你好'))

console.log('====================')
var reg9 = /18|19/
console.log(reg9.test('1819'))
console.log(reg9.test('18'))
console.log(reg9.test('19'))
console.log(reg9.test('1'))
console.log(reg9.test('9'))
console.log(reg9.test('819'))