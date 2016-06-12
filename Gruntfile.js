module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    stylus: {
      options: {
        'compress': false,
        'include css': true
      },
      compile: {
        files: {
          'dist/master.css': 'src/_styles/master.styl',
        }
      }
    },
    concat: {
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'src/_scripts/main.js'],
        dest: 'dist/master.js',
      }
    },
    concat: {   
      dist: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/typed-js/dist/typed.min.js',
          'bower_components/velocity/velocity.min.js',
          'bower_components/velocity/velocity.ui.min.js',
          'src/_scripts/main.js'
        ], 
        dest: 'dist/master.js',
      }
    },
    watch: {
      scripts: {
        files: ['src/_scripts/*.js', 'Gruntfile.js', 'src/_styles/*.styl'],
        tasks: ['concat', 'stylus'],
        options: {
          spawn: false
        },
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.registerTask('default', ['concat', 'stylus', 'watch']);
};