module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
        dist: {
            options: {              
                sassDir: 'style/sass',
                cssDir: 'css'
            }
        }                 
    },
    watch: {
      css: {
        files: 'style/sass/*.scss',
        tasks: 'compass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['compass','watch']);

};