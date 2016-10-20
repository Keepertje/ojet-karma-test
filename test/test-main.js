var tests = [];
var modules = [];
var SPEC_REGEXP = /Spec\.js$/;
//is in the viewmodel folder
var VIEWMODEL_REGEXP = /viewModels\//;
//ends with .js
var JS_REGEXP = /\.js$/;

/**
* This function converts a given js path to requirejs module
*/
var jsToModule = function (path) {
    return path.replace(/^\/base\/src\/js\//, '').replace(/\.js$/, '');
};

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (SPEC_REGEXP.test(file)) {
      tests.push(file);
    }
    else if (VIEWMODEL_REGEXP.test(file) && JS_REGEXP.test(file)) {
        modules.push(jsToModule(file));
    }
  }
}

var startTest= function(){
  //Load the modules before calling karma start.
  require(modules, function () { 
    window.__karma__.start()
  })
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src/js',

 paths:
  //same as in the main.js
  {
     'knockout': 'libs/knockout/knockout-3.4.0.debug',
    'jquery': 'libs/jquery/jquery-3.1.0',
    'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
    'promise': 'libs/es6-promise/es6-promise',
    'hammerjs': 'libs/hammer/hammer-2.0.8',
    'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
    'ojs': 'libs/oj/v2.1.0/debug',
    'ojL10n': 'libs/oj/v2.1.0/ojL10n',
    'ojtranslations': 'libs/oj/v2.1.0/resources',
    'text': 'libs/require/text',
    'signals': 'libs/js-signals/signals'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: startTest
});

