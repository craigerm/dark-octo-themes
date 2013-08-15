var fs = require('fs')
  , path = require('path');

var getLessFiles = function() {
  var files = fs.readdirSync('less')
    , lessFiles = {};

  for(var i=0; i < files.length; i++) {
    var srcFile = files[i];
    if(srcFile != 'main.less') {
      var destFile = 'themes/' + path.basename(srcFile, '.less') + '.css';
      console.log('Building %s => %s', srcFile, destFile);
      lessFiles[destFile] = 'less/' + srcFile;
    }
  }
  return lessFiles;
};

module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: getLessFiles()
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less']);
};

