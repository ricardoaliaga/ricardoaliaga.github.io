module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),

    	concat: {
    		dist: {
    			src: [
    			'js/plugins/*.js',
    			'js/custom.js'
    			],
    			dest: 'js/build/production.js'
    		}
    	},
    	uglify: {
    		my_target: {
    			files: {
    				'js/build/production.min.js': ['js/build/production.js']
    			}
    		}
    	},
    	imagemin: {
    		dynamic: {
    			files: [{
    				expand: true,
    				cwd: 'images/',
    				src: ['**/*.{png,jpg,gif}'],
    				dest: 'images/build/'
    			}]
    		}
    	},
    	sass: {
    		dist: {
    			options: {
    				style: 'compressed'
    			},
    			files: {
    				'css/styles.css': 'scss/styles.scss'
    			}
    		}
    	},
        browserSync: {
            default_options: {
                bsFiles: {
                    src: [
                    'css/*.css',
                    'js/*.js',
                    '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['browserSync', 'watch']);

};