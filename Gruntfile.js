module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        outputStyle: 'compressed',
        sourcemap: 'none'
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
