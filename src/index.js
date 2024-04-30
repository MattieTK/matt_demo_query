export var data = {};
// If your template includes data tables, use this variable to access the data.
// Each of the 'datasets' in data.json file will be available as properties of the data.

export var state = {
	example_state_property: 25,
	// The current state of template. You can make some or all of the properties
	// of the state object available to the user as settings in settings.js.
	text: 'Hello, world!!',
};

export function update() {
	// The update function is called whenever the user changes a data table or settings
	// in the visualisation editor, or when changing slides in the story editor.
	// Tip: to make your template work nicely in the story editor, ensure that all user
	// interface controls such as buttons and sliders update the state and then call update.
	document.querySelector('p').textContent = state.text;
}

export function draw() {
	// The draw function is called when the template first loads
	var urlParams = new URLSearchParams(window.location.search);
	var titleHide = urlParams.get('hideTitle');
	if (!titleHide) {
		var h1 = document.createElement('h1');
		h1.textContent = 'Hello, world!';
		document.body.appendChild(h1);
	}
	var p = document.createElement('p');
	p.textContent = state.text;
	document.body.appendChild(p);
}
