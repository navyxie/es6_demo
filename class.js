//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

//原生构造函数的继承
//原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript的原生构造函数大致有下面这些。

Boolean()
Number()
String()
Array()
Date()
Function()
RegExp()
Error()
Object()

class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'

class Foo {
  static classMethod() {
    return 'hello';
  }
}

Foo.classMethod() // 'hello'

var foo = new Foo();
foo.classMethod()
// TypeError: undefined is not a function

//上面代码中，Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法，可以直接在Foo类上调用（Foo.classMethod()），而不是在Foo类的实例上调用。如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法。

class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod(); // 'hello'

//父类的静态方法，可以被子类继承。


//静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象（this）上的属性。

class Foo {
}

Foo.prop = 1;
Foo.prop // 1

//上面的写法可以读写Foo类的静态属性prop。

//目前，只有这种写法可行，因为ES6明确规定，Class内部只有静态方法，没有静态属性。

// 以下两种写法都无效，
// 但不会报错
class Foo {
  // 写法一
  prop: 2

  // 写法二
  static prop: 2
}

Foo.prop // undefined