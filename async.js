var x = 1;

function f(m){
  return m * 2;
}

f(x + 5)

//上面代码先定义函数f，然后向它传入表达式x + 5。请问，这个表达式应该何时求值？

//一种意见是"传值调用"（call by value），即在进入函数体之前，就计算x + 5的值（等于6），再将这个值传入函数f 。C语言就采用这种策略。


f(x + 5)
// 传值调用时，等同于
f(6)

//另一种意见是"传名调用"（call by name），即直接将表达式x + 5传入函数体，只在用到它的时候求值。Hskell语言采用这种策略。

f(x + 5)
// 传名调用时，等同于
(x + 5) * 2
//传值调用和传名调用，哪一种比较好？回答是各有利弊。传值调用比较简单，但是对参数求值的时候，实际上还没用到这个参数，有可能造成性能损失。

function f(m){
  return m * 2;
}

f(x + 5);

// 等同于

var thunk = function () {
  return x + 5;
};

function f(thunk){
  return thunk() * 2;
}

var thunkify = require('thunkify');
var fs = require('fs');

var read = thunkify(fs.readFile);
read('package.json')(function(err, str){
  // ...
});


function thunkify(fn){
  return function(){
    var args = new Array(arguments.length);
    var ctx = this;

    for(var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done){
      var called;

      args.push(function(){
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    }
  }
};