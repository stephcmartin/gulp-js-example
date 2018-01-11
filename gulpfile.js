const gulp = require ('gulp')
const imagemin = require ('gulp-imagemin')
const uglify = require('gulp-uglify')

/*
 GULP TOP LEVEL FUNCTIONS:

 gulp.task - allows use to define tasks
 gulp.src - point to the files to use
 gulp.dest - point to the folder to output
 gulp.watch - watch files and folders for changes
*/

// logs message

gulp.task('message', function(){
    return console.log('Gulp is running...')
});

gulp.task('default', function(){
    return console.log('Gulp is running...')
});

// Copy all HTML files and creates it own dist folder for publishing

gulp.task('copyHTML', function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

// Optimize Images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
)

// Minify JS

gulp.task('minify', function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})