requirejs.config({
  baseUrl: '/javascripts',
  paths: {
    app: 'app/app',
    app2: 'app/app2',
    angular: 'libs/angular/1.4.7/angular',
    bootstrap: 'libs/bootstrap/3.3.5/bootstrap',
    jquery: 'libs/jquery/1.11.3/jquery',
    underscore: 'libs/underscore/1.8.3/underscore'
  },
  deps: ['app']
});
