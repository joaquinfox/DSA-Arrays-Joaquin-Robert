'use strict';
const mem = require('./memory');
const memory = new mem();
class MyArray {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = memory.allocate(this.length);
  }
}
