Brahma.app('butterflies').module('trig', {
	distX: function(radius, radian) {
		return this.disrotation(radian, radius);
	},
	distY: function(radius, radian) {
		return radius*this.sin(90 - radian);
	},
	disrotation : function(a,ac) {
		var dis = ac * this.sin(a);
		return dis;
	},
	sin : function(ra) {
		if ( (ra == 0) || (ra == 180) || (ra == 360) ) return 0;
		else return Math.sin(this.de_ra(ra));
	},
	de_ra : function(de) {
		var pi = Math.PI;
		var de_ra = (de*(pi/180));
		return de_ra;
	},
	not0 : function(num) {
		if (num<1) {
		   num = 1;
		};
		return num;
	},
	mradian : function(r) {
		while((r<0) || (r>360)) {
			if (r<0) r+=360;
			else r-=360;
		};
		return r;
	}
})