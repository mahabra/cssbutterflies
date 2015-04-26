Brahma.app('butterflies').fabric('butterfly', ['tie'], function() {
	var that = this;
	this.element = $(this.master.selector).first().put('div', {
		'class': 'brahma-butterfly'
	})
	.tie(function() {
		$(this)
		
		.put('figure',{"class":"brahma-butterfly-wing-left"}) // Left wing
		
		.and('figure',{"class":"brahma-butterfly-wing-right"}) // Right wing
		
		.and('figure',{"class":"brahma-butterfly-body"}) // Body

		.and('figure',{"class":"xcoord"})

		.and('figure',{"class":"ycoord"})

		.and('figure',{"class":"zcoord"});

	})[0];
	//this.fly();
}, {
	element: null,
	rotate: function(x,y,z) {
		$(this.element).css(['-webkit-','-ms-'], {
			'transform-origin': '-200% 50%',
			'transform': 'scale(3) rotateX('+x+'deg) rotateZ('+z+'deg) rotateY('+y+'deg)'
		})
	},
	translate: function(x, y, z) {
		console.log('this.element', 'scale(3) translate3d('+x||0+'px,'+y||0+'px,'+z||0+'px)');
		$(this.element).css(['-webkit-','-ms-'], {
			'transform': 'perspective(900px) scale(3) translate3d('+x+'px,'+y+'px,'+z+'px)'
		})
	},
	fly: function() {
		
		var that=this,trig=that.master.module('trig'),x=0,y=0,radius=50,angle = 0;
		setInterval(function() {
			angle=trig.mradian(angle-3);
			x = trig.distX(radius,angle);
			y = trig.distY(radius,angle);
			
			//that.translate(x,y,0);
			that.rotate(90,10,angle);
			console.log('angle', angle, x, y);
		},50);
	}
});
