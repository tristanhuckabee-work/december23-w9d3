class DynamicArray {

  constructor(defaultSize=4) {
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    this.data = [val, ...this.data];
    this.length++;
  }

}


module.exports = DynamicArray;
