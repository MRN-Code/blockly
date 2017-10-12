'use strict';

/**
 * COINS Front-End Gruntfile.
 * @module
 *
 * @todo Use of Grunt will be removed in a future version coins_core in favor of
 * using npm scripts and composer directly. See:
 * {@link https://github.com/MRN-Code/coins_core/pull/329}
 *
 * {@link https://gruntjs.com/getting-started}
 * {@link https://www.npmjs.com/package/grunt-exec}
 *
 * @param {Grunt} grunt
 */
module.exports = function (grunt) {
    console.error(`🚨  Use of Grunt will be removed in a future version coins_core in favor of using npm scripts and composer directly. See: https://github.com/MRN-Code/coins_core/pull/329`);

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    require('load-grunt-config')(grunt);

    grunt.registerTask('build', { command: 'npm run build' });
    grunt.registerTask('default', ['build']);
};