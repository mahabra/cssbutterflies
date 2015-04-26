Brahma(function($) {
	'use strict';
	
	Brahma.app('butterflies', {
		butterflies: [],
		data: {
			centerTop: 0,
			centerLeft: 0
		}
	}).run = function() {
		/* Calc center */
		this.data.centerTop = $(this.selector)[0].offsetY;
		this.data.centerLeft = $(this.selector)[0].offsetX;

		/* Create butterfly */
		this.butterflies.push(this.create('butterfly'));
		this.butterflies.push(this.create('butterfly'));
	};

	/* Фабрика позволит создать объект бабочки, объект будет внедрен в document */
	<%=$.snippet('fabrics/butterfly.js')%>
	<%=$.snippet('modules/trig.js')%>
});