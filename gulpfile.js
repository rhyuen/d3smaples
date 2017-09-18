"use strict";
const browserSync = require("browser-sync").create();
const gulp = require("gulp");

gulp.task("browserSync", () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["browserSync"]);