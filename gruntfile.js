module.exports = function(grunt) {

    "use strict";
    const sass = require('node-sass');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // JS Concat (javascript files to merge)
        concat: {
            options: {
                separator: "\n\r",
                sourceMap: false,
            },
            dist: {
                src: [
                    "assets/src/js/jquery.js",
                    "assets/src/js/jquery-migrate-1.2.1.js",
                    "assets/src/js/plugins/fancybox/*.js",
                    "assets/src/js/plugins/slickslider/*.js",
                    "assets/src/js/pages/*.js",
                    "assets/src/js/plugins/bootstrap/popper.js",
                    "assets/src/js/plugins/bootstrap/**/*.js",
                    // "assets/src/js/plugins/bootstrap/dom/data.js",
                    //  "assets/src/js/plugins/bootstrap/dom/event-handler.js",
                    //  "assets/src/js/plugins/bootstrap/dom/manipulator.js",
                    //  "assets/src/js/plugins/bootstrap/dom/selector-engine.js",
                    //  "assets/src/js/plugins/bootstrap/alert.js",
                    //  "assets/src/js/plugins/bootstrap/base-component.js",
                    //  "assets/src/js/plugins/bootstrap/button.js",
                    //  "assets/src/js/plugins/bootstrap/carousel.js",
                    //  "assets/src/js/plugins/bootstrap/collapse.js",
                    //  "assets/src/js/plugins/bootstrap/dropdown.js",
                    //  "assets/src/js/plugins/bootstrap/modal.js",
                    //  "assets/src/js/plugins/bootstrap/offcanvas.js",
                    //  "assets/src/js/plugins/bootstrap/popover.js",
                    //  "assets/src/js/plugins/bootstrap/scrollspy.js",
                    //  "assets/src/js/plugins/bootstrap/tab.js",
                    // "assets/src/js/plugins/bootstrap/tooltip.js",
                    //  "assets/src/js/plugins/bootstrap/toast.js",
                ],
                dest: "assets/src/js/main.js",
            },
        },

        // JS Uglify (js file minify)
        uglify: {
            options: {
                mangle: false,
                output: {
                    comments: false
                }
            },
            build: {
                src: ['assets/src/js/main.js'],
                dest: 'assets/dist/js/main.min.js'
            }
        },

        // SCSS Compiler (Scss to css)
        sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'assets/src/css/main.css': 'assets/scss/main.scss'
                }
            }
        },

        // CSS Files Minify
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/src/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/dist/css',
                    ext: '.min.css'
                }]
            }
        },

        // Watch Tasks
        watch: {
            scripts: {
                files: ['assets/src/js/**/*.js'],
                tasks: ['concat', 'uglify']
            },
            styles: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    // grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);
    // grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin', 'watch']);
};