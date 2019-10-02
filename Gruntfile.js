module.exports = tasks;

function tasks(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        flatten: true,
        src: 'src/index.html',
        dest: 'build/'
      },
      vendor: {
        files: [
          {
            src: ['node_modules/jquery/build/jquery.js'],
            flatten: true,
            expand: true,
            dest: 'build/vendor/'
          }
        ]
      }
    },
    clean: {
      all: ['build/*'],
      vendor: ['src/vendor/*'],
      main: ['build/**/*.js.', 'build/**/*.html', '!build/vendor/**.*']
    },
    watch: {
      main: {
        files: ['src/**'],
        tasks: ['clean:main', 'copy:main'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['clean:all', 'build']);
  grunt.registerTask('build', ['copy']);
  grunt.registerTask('dev', ['default', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
