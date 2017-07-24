(function () {
  //定义数据变量
  var data = 'so so'
  //操作数据的函数
  function doSomeThing() {
    console.log('doSomeThing()',data.toUpperCase());

  }
  function doOtherThing() {
    console.log('doOtherThing()',data.toLowerCase());
  }

  //完全私有函数
  function test() {
    console.log('innerHTML test()')

  }

  //通过window进行暴露
  window.myModule = {
    doSomeThing,
    doOtherThing
  }
//  此时的闭包是没有消失的 主要是闭包里的对象被 myModule 所引用着



})()
