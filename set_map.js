var set = new Set([1, 2, 3, 4, 4])
[...set]
// [1, 2, 3, 4]

var items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5

function divs () {
  return [...document.querySelectorAll('div')]
}

var set = new Set(divs())
set.size // 56

// 类似于
divs().forEach(div => set.add(div))
set.size // 56