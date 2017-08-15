var funThingsToDo = [];
function ready() {
    funThingsToDo.push(new FunThingTodo(1, "Play Tennis", 4, 10), new FunThingTodo(2, "Play Music", 1, 0), new FunThingTodo(3, "Relax", 0, 0));
    display();
}
function display() {
    var dataCtrl = document.getElementById('events');
    dataCtrl.innerHTML = "";
    for (var idx = 0; idx < funThingsToDo.length; idx++) {
        var funThingToDo = funThingsToDo[idx];
        dataCtrl.innerHTML += funThingToDo.ToBootstrap();
    }
}
function add() {
    var order = document.getElementById('order').value;
    var description = document.getElementById('description').value;
    var monthly = document.getElementById('monthly').value;
    var cost = document.getElementById('cost').value;
    var funThingToDo = new FunThingTodo(order, description, monthly, cost);
    funThingsToDo.push(funThingToDo);
    display();
    clear();
}
function clear() {
    document.getElementById('order').value = "";
    document.getElementById('description').value = "";
    document.getElementById('monthly').value = "";
    document.getElementById('cost').value = "";
}
var FunThingTodo = (function () {
    function FunThingTodo(order, description, timesEachMonth, costEachTime) {
        this.order = order;
        this.description = description;
        this.timesEachMonth = timesEachMonth;
        this.costEachTime = costEachTime;
    }
    FunThingTodo.prototype.ToBootstrap = function () {
        var endDiv = "</div>";
        var begRowDiv = "<div class='row'>";
        var begDataDiv = "<div class='col-md-3'>";
        var row = begRowDiv;
        row += begDataDiv + this.order + endDiv;
        row += begDataDiv + this.description + endDiv;
        row += begDataDiv + this.timesEachMonth + endDiv;
        row += begDataDiv + this.costEachTime + endDiv;
        row += endDiv;
        return row;
    };
    return FunThingTodo;
}());
