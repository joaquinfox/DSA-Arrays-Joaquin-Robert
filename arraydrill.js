'use strict';
const mem = require('./memory');
const memory = new mem();

class MyArray {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * MyArray.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * MyArray.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}
// MyArray.SIZE_RATIO = 4;

// function Main() {
//   let arr = new MyArray();
//   arr.push(30);
//   arr.push(1);
//   arr.push(2);
//   arr.push(55);
//   arr.push(9);
//   arr.push(1, 2, 3, 4, 8);
//   // console.log(arr.capacity);
//   // arr.pop(1);
//   // arr.remove(0);
//   arr.get(0);
//   arr.get(1);
//   arr.get(2);
//   // arr.insert(1, 69);
//   console.log(arr);
// }
function main() {
  MyArray.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new MyArray();

  //add an item to the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  arr.get(0);

  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr);

  console.log(arr.get(0));
}

main();

/*
1 What is the length, capacity and memory address of your array?
length 1, capacity is 3, ptr 0.
2 What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.
The length grows in linear fashion but the capactity grows in (length + 1 )  * 3, once current capactity is exceeded.

3 What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
Length is 3, cpcty 12, address still 3.

4 Print the first item in the array arr.
Ans 5.

5 Empty the array and add just one item arr.push("tauhida");
Done, returns undefined. Because of how we define class Memory.

6 Print this one item that you just added. What is the result? Can you explain your result?
Above.


7 What is the purpose of the _resize() function in your Array class?

The '_' designates 'private' methods should only be used in scope (inside the class they are defined in.)

*/
