
var fs = require('fs')
  , path = require('path');

var getLessFiles = function() {
  var files = fs.readdirSync('less')
    , lessFiles = {};

  for(var i=0; i < files.length; i++) {
    var srcFile = files[i];
    if(srcFile != 'main.less') {
      var destFile = 'src/themes/' + path.basename(srcFile, '.less') + '.css';
      console.log('Building %s => %s', srcFile, destFile);
      lessFiles[destFile] = 'less/' + srcFile;
    }
  }
  return lessFiles;
};

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    meta: {
      version: '<%= pkg.version %>'
    },

    less: {
      development: {
        files: getLessFiles()
      }
    },

    compress: {
      main: {
        options: {
          archive: 'dist/release_<%= meta.version %>.zip'
        },
        files: [
          {src: ['src/**/*', 'manifest.json']}
        ]
      }
    },

    watch: {
      all: {
        files: ['less/*.less'],
        tasks: 'less'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', ['less']);
  grunt.registerTask('release', ['compress']);
};

