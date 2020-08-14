/*
    Stack Implementation - FILO
*/
var Stack = /** @class */ (function () {
    function Stack() {
        this.lists = [];
        this.count = 0;
    }
    Stack.prototype.push = function (item) {
        this.lists.push(item);
        this.count++;
    };
    Stack.prototype.pop = function () {
        this.count = this.count > 0 ? this.count - 1 : 0;
        return this.lists.pop();
    };
    Stack.prototype.getCount = function () {
        return this.count;
    };
    Stack.prototype.getLists = function () {
        return this.lists;
    };
    return Stack;
}());
var obj = new Stack();
obj.push('first');
obj.push('second');
console.log(obj.getLists());
