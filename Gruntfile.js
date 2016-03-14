var lessConfig = {
  build: {
    options: {
      cleancss: false
    },
    files: [{
      expand: true,
      cwd: 'src/less',
      src: ['**/*.less'],
      dest: 'dist/css',
      ext: '.css'
    }]
  },
  buildMin: {
    options: {
      compress: true
    },
    files: [{
      expand: true,
      cwd: 'src/less',
      src: ['**/*.less'],
      dest: 'dist/css',
      ext: '.min.css'
    }]
  }
}

var copyConfig = {
  build: {
    files: [{
      expand: true,
      cwd: 'src',
      src: [
        '**/*'
      ],
      dest: 'dist'
    }]
  }
}

var uglifyConfig = {
  buildMin: {
    src: 'src/js/*.js',
    dest: 'dist/js/bootstrap-slider-text-input.min.js'
  }
}

module.exports = function (grunt) {
  grunt.initConfig({
    less: lessConfig,
    copy: copyConfig,
    uglify: uglifyConfig
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['less', 'copy', 'uglify'])
}
