/* global module:false */
module.exports = function(grunt) {
    var port = grunt.option('port') || 8000;

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: port,
                    base: '.'
                }
            }
        },

        watch: {
            main: {
                files: [ 'Gruntfile.js', '*.html' ],
                tasks: ''
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-connect' );

    // Serve example locally
    grunt.registerTask( 'serve', [ 'connect', 'watch' ] );

    // Default task
    grunt.registerTask( 'default', [ 'serve' ] );
};
