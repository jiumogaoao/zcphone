// JavaScript Document
module.exports = function(grunt){
	'use strict';
    grunt.initConfig({
        concat: {
            options: {                                       //配置
                stripBanners:true,
                banner: '/*! This is the grunt test ' +      //添加自定义的banner
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            basic: {                                         //另一个任务
                files: {                                     //另一种更简便的写法
                    'dist/css/style.css': ['css/*.css']
                }
            },
			ui: {                                         //另一个任务
                files: {                                     //另一种更简便的写法
                    'dist/css/base/ui.css': ['css/base/*.css']
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! This is uglify test - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            common: {
                files: {
                    'dist/js/common.js': ['js/jquery-2.1.0.js','js/touch.js','js/underscore-min.js','js/moment.js','js/cookies.min.js','js/config.js','js/common.js','js/route.js','js/control.js','js/cache.js','js/api.js','js/iscroll.js']
                }
            },
			lib: {
                files: {
                    'dist/js/lib.js': ['api/*.js','control/*.js']
                }
            }
        },

        watch: {
            another: {
                files: ['js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify']);
}