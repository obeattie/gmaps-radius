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
                    src: ['**/*.coffee']
                    dest: './build/js'
                    ext: '.js'
                }]
            }
        }
        
        concat: {
            js: {
                options: {
                    sourceMap: 'true'
                }
                files: {
                    './build/js/app.js': [
                        './js/**.js',
                        './build/js/gmaps-radius.js',
                    ]
                }
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
                    sourceMap: true
                    sourceMapIn: './build/js/app.js.map'
                    sourceMapIncludeSources: true
                },
                files: {
                    './build/js/app.min.js': './build/js/app.js'
                }
            }
        }
        
        watch: {
            js: {
                files: ['./js/**.{coffee,js}']
                tasks: ['coffee:js', 'concat:js', 'uglify:js']
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
    grunt.loadNpmTasks('grunt-contrib-concat')
    
    grunt.registerTask('build', ['coffee', 'concat', 'less', 'uglify'])
    grunt.registerTask('dev', ['build', 'watch'])
