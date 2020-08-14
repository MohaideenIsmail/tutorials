/*
    Stack Implementation - FILO
*/

class Stack {

    lists;
    count;

    constructor() {
        this.lists = [];
        this.count = 0;
    }

    push(item) {
        this.lists.push(item);
        this.count++;
    }

    pop() {
        this.count = this.count > 0 ? this.count - 1 : 0;
        return this.lists.pop();
    }

    getCount() {
        return this.count;
    }

    getLists() {
        return this.lists;
    }
}


var obj = new Stack();
obj.push('first');
obj.push('second');
console.log(obj.getLists());