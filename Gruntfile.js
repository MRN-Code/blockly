'use strict';

/**
 * COINS Front-End Gruntfile.
 * @module
 *
 * @todo Use of Grunt will be removed in a future version blocky in favor of
 * using npm scripts and composer directly. See:
 * {@link https://github.com/MRN-Code/coins_core/pull/329}
 *
 * {@link https://gruntjs.com/getting-started}
 * {@link https://www.npmjs.com/package/grunt-exec}
 *
 * @param {Grunt} grunt
 */
module.exports = function (grunt) {
    console.error(`🚨  Use of Grunt will be removed in a future version blocky in favor of using npm scripts and composer directly. See: https://github.com/MRN-Code/coins_core/pull/329`);

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        exec: {
          build: {
            command: 'npm run build',
          },
        },
        pkg: grunt.file.readJSON('package.json'),
    });

    grunt.registerTask('build', ['exec:build']);
    grunt.registerTask('default', ['build']);
};