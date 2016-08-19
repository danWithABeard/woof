module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          './css/barkconcierge.css': './sass/base.scss'
        }
      }
    }
  });

  grunt.registerTask("build", ["sass"]);
};