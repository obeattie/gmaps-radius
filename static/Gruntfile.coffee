module.exports = (grunt) ->
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        
        coffee: {
            js: {
                options: {
                    sourceMap: true
                }
                files: [{
                    expand: true
                    cwd: './js'
                    src: ['gmaps-radius.coffee']
                    dest: './build/js/'
                    ext: '.js'
                }]
            }
        }
        
        less: {
            css: {
                options: {
                    compress: true
                }
                files: {
                    './build/style/style.css': './style/*.less'
                }
            }
        }
        
        uglify: {
            js: {
                options: {
                    mangle: true
                    preserveComments: 'some'
                    banner: '/*! Made by Oliver Beattie. Built <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                    compress: true
                    sourceMap: './build/js/gmaps-radius.js.map'
                    sourceMapIn: './build/js/gmaps-radius.js.map'
                    sourceMappingURL: 'gmaps-radius.js.map'
                },
                files: {
                    './build/js/gmaps-radius.js': ['./build/js/gmaps-radius.js']
                }
            }
        }
        
        watch: {
            js: {
                files: ['./js/**.coffee']
                tasks: ['coffee:js', 'uglify:js']
                options: { spawn: false }
            }
            css: {
                files: ['./style/**.{css,less}']
                tasks: ['less:css']
                options: { spawn: false }
            }
        }
        
        clean: {
            js: {
                src: ['./build/js']
            }
            css: {
                src: ['./build/style']
            }
        }
    })
    
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-coffee')
    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-watch')
    
    grunt.registerTask('build', ['coffee', 'less', 'uglify'])
    grunt.registerTask('dev', ['build', 'watch'])
