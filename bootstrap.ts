var funThingsToDo: FunThingTodo[] = [];

function ready() {

	funThingsToDo.push(
		new FunThingTodo(1, "Play Tennis", 4, 10),
		new FunThingTodo(2, "Play Music", 1, 0),
		new FunThingTodo(3, "Relax", 0, 0)
	);

	display();

}

function display() : void {
	var dataCtrl = document.getElementById('events');
	dataCtrl.innerHTML = "";
	for(let idx = 0; idx < funThingsToDo.length; idx++) {
		let funThingToDo: FunThingTodo = funThingsToDo[idx];
		dataCtrl.innerHTML += funThingToDo.ToBootstrap();
	}
}

function add() : void {
	let order:number = document.getElementById('order').value;
	let description:string = document.getElementById('description').value;
	let monthly:number = document.getElementById('monthly').value;
	let cost:number = document.getElementById('cost').value;
	let funThingToDo: FunThingTodo = new FunThingTodo(order, description, monthly, cost);
	funThingsToDo.push(funThingToDo);
	display();
	clear();
}

function clear() : void {
	document.getElementById('order').value = "";
	document.getElementById('description').value = "";
	document.getElementById('monthly').value = "";
	document.getElementById('cost').value = "";
}

class FunThingTodo {
	order: number;
	description: string;
	timesEachMonth: number;
	costEachTime: number;

	constructor(order: number, description: string, timesEachMonth: number, costEachTime: number) {
		this.order = order;
		this.description = description;
		this.timesEachMonth = timesEachMonth;
		this.costEachTime = costEachTime;
	}

	ToBootstrap() {
		const endDiv = "</div>";
		const begRowDiv = "<div class='row'>";
		const begDataDiv = "<div class='col-md-3'>"; 
		let row: string = begRowDiv;
		row += begDataDiv + this.order + endDiv;
		row += begDataDiv + this.description + endDiv;
		row += begDataDiv + this.timesEachMonth + endDiv;
		row += begDataDiv + this.costEachTime + endDiv;
		row += endDiv;
		return row;
	}
}