
var gulp = require('gulp'),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel"),
    htmlmin = require('gulp-htmlmin'),
    minifycss = require('gulp-clean-css'),
    fs = require("fs"),
    del = require('del');

var htmlmin_options = {
  collapseWhitespace:true,
  collapseBooleanAttributes:true,
  removeComments:true,
  removeEmptyAttributes:true,
  removeScriptTypeAttributes:true,
  removeStyleLinkTypeAttributes:true,
  minifyJS:true,
  minifyCSS:true
};

gulp.task('default', ['发布'], function(){
  console.log("完成！");
});


gulp.task('发布', function(){
  makeDist();
});


function makeDist(){

};
