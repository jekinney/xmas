window.onload = this.setLights();

function setLights() {
	var count = Math.floor(this.getWidth() / 40.2);
	this.topLights(count);
	//this.bottomLights(count);
	this.stars();
}

function topLights(amount) {
	var lights = document.getElementById('top-lights');
	lights.innerHTML = '';
	for (i=0; amount > i; i++) {
		var light = document.createElement('div');
		light.className = 'light-string';
		light.innerHTML = 
			`<div class="light-base"></div>
			<div class="light-socket"></div>
			<div class="bulb"></div>`;

		lights.appendChild(light);
	}
}

function bottomLights(amount) {
	var height = this.getHeight();
	var lights = document.getElementById('bottom-lights');
	lights.innerHTML = '';
	for (i=0; amount > i; i++) {
		var light = document.createElement('div');
		light.className = 'light-string-bottom';
		light.setAttribute('style', 'top:'+height+'px');
		light.innerHTML = 
			`<div class="light-base-bottom"></div>
			<div class="light-socket-bottom"></div>
			<div class="bulb-bottom"></div>`;

		lights.appendChild(light);
	}
}

function getWidth() {
	if (self.innerWidth) {
		return self.innerWidth;
	}

	if (document.documentElement && document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}

	if (document.body) {
		return document.body.clientWidth;
	}
}

function getHeight() {
	if (self.innerHeight) {
		return self.innerHeight;
		}

	if (document.documentElement && document.documentElement.clientHeight) {
	    return document.documentElement.clientHeight;
		}

	if (document.body) {
		return document.body.clientHeight;
	}
}

function stars() {
	var stars = [];
    var height = this.getHeight();
    var width = this.getWidth();
    var count = Math.floor(width / 10);

    var background = document.getElementById('stars');
    background.style['width'] = width;
    background.style['height'] = height;

    console.log(background);
    // for(i=0; count > i; i++) {

    // }

}