class MVC {

	constructor(model, view, controller) {
		console.log("new MVC");

		this.model = model;
		this.view = view;
		this.controller = controller;

		this.model.view = view;
		this.model.controller = controller;

		this.view.model = model;
		this.view.controller = controller;

		this.controller.model = model;
		this.controller.view = view;

		this.model.initialize();
		this.view.initialize();
		this.controller.initialize();
	}

}

class Model {

	constructor() {
		console.log("new model");
		this.view = null;
		this.controller = null;
	}

	initialize() {
		console.log("init model");
	}

}

class View {

	constructor(element) {
		console.log("new view");
		this.wrapper = element;

		this.model = null;
		this.controller = null;
	}

	initialize() {
		console.log("init view");
	}

}

class Controller {

	constructor() {
		console.log("new controller");
		this.model = null;
		this.view = null;
	}

	initialize() {
		console.log("init controller");

	}

}

class MyModel extends Model {

	constructor(element) {
		super();
	}

	data() {
		// charger les données depuis le serveur
		return ["#000000", "#FF0000", "#00FF00", "#0000FF"];
	}

	random() {
		return "#" + Math.random().toString(16).substr(-6);
	}

}

class MyView extends View {

	constructor(element) {
		super(element);
	}

	draw(data) {
		data.forEach(color => new Chain()
			.create("div")
			.addClass("square")
			.style({backgroundColor: color, border: "dashed 2px red"})
			.appendTo(this.wrapper)
			.on("click", event => this.controller.elementClick(event.target))
		);
	}

	refresh(square, color) {
		square.style.backgroundColor = color;
	}

}

class MyRoundView extends View {

	constructor(element) {
		super(element);
	}

	draw(data) {
		data.forEach(color => new Chain()
			.create("div")
			.addClass("square")
			.style({backgroundColor: color, borderRadius: "50px", border: "dashed 2px red"})
			.appendTo(this.wrapper)
			.on("click", event => this.controller.elementClick(event.target))
		);
	}

}


class MyController extends Controller {

	constructor(element) {
		super();
	}

	initialize() {
		super.initialize();

		this.view.draw(this.model.data());
	}

	elementClick(square) {
		this.view.refresh(square, this.model.random());
	}

}
