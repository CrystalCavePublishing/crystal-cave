/* dependencies */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    templateCache = require('gulp-angular-templatecache'),
    del = require('del');

/* paths catalog */
var paths = {
    src: {
        js: ['./src/js/*.js'],
        sass: ['./src/sass/*.scss'],
        templates: ['./src/templates/*.html']
    },
    build: {
        /* locations of generated files */
        dir: './build',
        vendor: './vendor', 
        /* names of generated files */
        minjs: 'crystal-cave.min.js',
        vendorminjs: 'vendor.min.js',
        vendorjs: 'vendor.js',
        css: 'crystal-cave.css'

    },
    vendorjs: [
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/build/angular-ui-router.min.js'
    ],
};

/* JS */
gulp.task('js', ['cleanjs'], function(){
    // this task construction makes it async, according to Gulp's docs.
    var stream = gulp.src(paths.src.js)
                     .pipe(sourcemaps.init())
                     .pipe(uglify())
                     .pipe(concat(paths.build.minjs))
                     .pipe(sourcemaps.write())
                     .pipe(gulp.dest(paths.build.dir))
    return stream;
});

gulp.task('vendorjs', ['cleanvendor'], function(){
    var stream = gulp.src(paths.vendorjs)
                     .pipe(concat(paths.build.vendorjs))
                     .pipe(gulp.dest(paths.build.vendor))
    return stream;
});

/* SASS */
gulp.task('sass', ['cleancss'], function(){
    var stream = gulp.src(paths.src.sass)
                     .pipe(sourcemaps.init())
                     .pipe(sass().on('error', sass.logError))
                     .pipe(concat(paths.build.css))
                     .pipe(gulp.dest(paths.build.dir)) 
    return stream;
});

/* CLEANUP */
gulp.task('cleanjs', function(cb){
    var stream = del(paths.build.dir + '/' + paths.build.minjs, cb);
    return stream;
});
gulp.task('cleancss', function(cb){
    var stream = del(paths.build.dir + '/*.css', cb);
    return stream;
});
gulp.task('cleanvendor', function(cb){
    var stream = del(paths.build.vendor);
    return stream;
});
gulp.task('cleantemplates', function(cb){
    var stream = del(paths.build.build + '/templates.js');
    return stream;
});

/* TEMPLATE CACHE */
gulp.task('templates', ['cleantemplates'], function(){
    gulp.src(paths.src.templates)
        .pipe(templateCache('templates.js', {standalone: true}))
        .pipe(gulp.dest(paths.build.dir))
});

/* WATCH */
gulp.task('watch', function(){ 
    gulp.watch(paths.src.js, ['js']);
    gulp.watch(paths.src.sass, ['sass']);
});

gulp.task('default', [
        'vendorjs', 
        'cleantemplates', 
        'cleanjs', 
        'cleancss', 
        'templates', 
        'js', 
        'sass', 
        'watch'
    ]);

