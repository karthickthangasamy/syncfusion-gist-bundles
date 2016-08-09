var gulp = require('gulp');
var bundler = require('aurelia-bundler');
var bundles = require('../bundles.js');

var config = {
  force: true,
  configPath: "config.js",
  injectionConfigPath: "config.js",
  packagePath: '.',
  bundles: bundles.bundles
};

gulp.task('bundle', ['unbundle'], function() {
  return bundler.bundle(config);
});

gulp.task('unbundle', ['clean'], function() {
  return bundler.unbundle(config);
});
