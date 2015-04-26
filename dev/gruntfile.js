module.exports = function(grunt) {

	grunt.initConfig({
		bowerjson: grunt.file.readJSON('../package.json'),
	    watch: {
	    	"styles":{
	    		"files":["./less/**/*.less"],
	    		"tasks":["less","autoprefixer","imageEmbed","snipper"],
	    		"options":{"nospawn":true}
	    	},
	    	"html":{
	    		"files":["./html/**/*.html"],
	    		"tasks":["snipper"],
	    		"options":{"nospawn":true}
	    	}
	    },
		snipper: {
			html: {
		        files: {
		        	'../': ['./html/index.html']
		        }
		    }
	    },
		less: {
			styles: {
		        options: {
		          compress: true,
		          yuicompress: true,
		          optimization: 2
		        },
		        files: {
		          "./dist/butterflies.css": "./less/butterflies.less",
		          "./dist/scene.css": "./less/scene.less"
		        }
		  	}
		},
		banner: '/** Created by Morulus */',
		usebanner: {
		    dist: {
				options: {
					position: 'top',
					banner: '<%= banner %>'
				},
				files: {
					src: ['./dist/<%=bowerjson.main.join("','")%>']
				}
		    }
		},
		autoprefixer: {
			styles: {
				options: {
					browsers: ['> 1%', 'ie >= 9']
				},
				files: {
					 "./dist/butterflies.css": "./dist/butterflies.css",
					 "./dist/404.css": "./dist/404.css"
				}
			}
		},
		imageEmbed: {
		    dist: {
		      src: [ "./dist/404.css" ],
		      dest: "./dist/404.css",
		      options: {
		        deleteAfterEncoding : false,
		        preEncodeCallback: function (filename) { return true; }
		      }
		    }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-snipper');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-image-embed');

	grunt.registerTask('default', ['less','autoprefixer','imageEmbed','snipper','watch']);
};