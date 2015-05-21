module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('grunt.json'),
    stylus: {
      compile: {
        options: {
          compress: false,
          watch: './', 
          paths: [
            "node_modules/grunt-contrib-stylus/node_modules",
            "node_modules/jeet/stylus"
          ],
					sourcemap:{
						comment: true, 
						inline: true,
						sourceRoot: ".", 
						basePath: "."
					}
        },
        files: {
          '../meteorApp/public/styles/app.css': 'app.styl'
        }
      }
    },
    watch: {
      stylus: {
        files: ['**/*.*'],
        tasks: ['stylus:compile'],   
        options : { 
          livereload: true, 
        }
      }
    }
  });

	grunt.loadNpmTasks('grunt-stylus-map');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('compile', ['stylus', 'watch']);
  grunt.registerTask('default', ['compile']);
};
