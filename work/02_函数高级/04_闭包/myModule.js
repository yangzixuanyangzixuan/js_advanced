//一个模块中要有数据变量 和 操作数据的函数 data变量
//也使用了闭包结构 在内部引用了
//闭包存在的原因 主要是 在html中调用的时候 可以获取到相应的数据
// 缺点就是 需要执行函数对象才可以获取到对应的数据
function myModule() {
  //数据变量
  var data = 'so so ---'
  //操作数据的函数
  function doSomeThing() {
    console.log('doSomeTing()',data.toUpperCase());

  }

  function doOtherThing() {
    console.log('doOtherThing()',data.toLowerCase());

  }
  //通过return 将对象进行暴露到外部

  return{
    //将对象封装到一个对象中去
    doSomeThing,
    doOtherThing
  }



}