class HH {

	// no constructor

	static create(name) {
		return document.createElement(name);
	}

}

class SS {

	// no constructor

	static addClass(el, classes) {
		el.classList.add(classes);
	}

	static removeClass(el, classes) {
		el.classList.remove(classes);
	}

	static style(el, styles) {
		Object.assign(el.style, styles);
	}

}

class EE {

	// no constructor

	/**
	 * @method on : addEventListener proxy
	 * @param {Element} el : 
	 * @param {string} event : 
	 * @param {Function} callback : 
	 */
	static on(el, event, callback) {
		el.addEventListener(event, callback);
	}

	/**
	 * @method off : addEventListener proxy
	 * @param {Element} el : 
	 * @param {string} event : 
	 * @param {Function} callback : 
	 */
	static off(el, event, callback) {
		el.removeEventListener(event, callback);
	}

}

class Chain {

	constructor(el) {
		this._element = el;
	}

	create(name) {
		console.log("create", name);
		this._element = HH.create(name);
		return this;
	}

	appendTo(parent) {
		parent.appendChild(this._element);
		return this;
	}

	addClass(classes) {
		SS.addClass(this._element, classes);
		return this;
	}

	style(styles) {
		SS.style(this._element, styles);
		return this;
	}

	on(event, callback) {
		EE.on(this._element, event, callback);
		return this;
	}

	// getter setter
	get element() {
		return this._element;
	}
}

class VideoChain {

	constructor(filePath) {
		this._path = filePath;
	}

	encode(q, r) {
		// q 1 2 3
		// r 540 720 1080
		// ffmpeg
		return this;
	}

	youtubeUpload() {
		// upload vers youtube
		// récupération du lien
		return this;
	}

	vimeoUpload() {
		// upload vers vimeo
		// récupération du lien
		return this;
	}

}


//new VideoChain('blabla.mkv').encode(3, 720).youtubeUpload().vimeoUpload();
