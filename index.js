var fs      = require('fs-extra'),
  path      = require('path'),
  prompt    = require('prompt'),
  dir       = path.dirname(),
  fileArr   = [],
  ouput     = '';

var options = {
  directory: ['modules'],
  remove: false
};

module.exports = function sassysass(directory, remove) {

  if(directory === undefined){
    directory = options.directory;
  }

  if(remove === undefined){
    remove = options.remove;
  }

  var files = fs.readdirSync(dir + '/sass/' + directory + '/');
  for (var i in files) {
    if(files[i].indexOf('.scss') != -1){
      var name = files[i];
      name = name.replace('_', '').replace('.scss', '');
      // push unused files to an array
      fileArr.push(name);
    }
  }
  findFiles(directory, remove);
};

function findFiles(directory, remove){
  var files = fs.readdirSync(dir + '/sass/');
  var num = 0;
  for (var i in files) {
    if(files[i].indexOf('.scss') != -1){
      var name = files[i];
      var fileName = name.replace('_', '').replace('.scss', '');
      fs.readFile(dir + '/sass/' + name, 'utf8', function (err, data) {
        if (err) {
          return err;
        }

        // loop through the unused files array
        fileArr.forEach(function(entry) {
          if(data.indexOf('@import "' + directory + '/' + entry + '";') === -1){
            ouput += '_' + entry + '.scss\n';
            num++;
          }
        });
        console.log('\nSassy Sass: there is currently ' + num + ' unused ' + directory + '\n');
        console.log(ouput);

        // prompt to ask if unused files should be deleted
        if(num >= 1 && remove === true){
          prompt.message = 'SassySass'.magenta;
          prompt.delimiter = ' ';

          prompt.start();

          prompt.get({
            properties: {
              answer : {
                description: 'Do you want to delete unused '+ directory +'? (yes/no)',
              }
            }
          }, function (err, result) {
            // if user responds yes files will then be deleted
            if(result.answer === 'yes'){
              // loop through the unused files array
              fileArr.forEach(function(entry) {
                // unlink each unused file
                fs.unlink(dir + '/sass/' + directory + '/_' + entry + '.scss', function (err) {
                  if (err) throw err;
                });
              });
              console.log('Unused ' + directory + ' have been deleted');
            }
          });
        }
      });
    }
  }
}