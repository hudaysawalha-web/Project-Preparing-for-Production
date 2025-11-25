import gulp from 'gulp';
import shell from 'gulp-shell';

// build and serve with Parcel
gulp.task('default', shell.task(['parcel index.html --open']));

// Unit test task
gulp.task('test', shell.task(['npx mocha test/shuffle.js']));

// Cypress task
gulp.task('cypress', shell.task(['npx cypress run']));

// Build task for production
gulp.task('build', shell.task(['parcel build index.html']));