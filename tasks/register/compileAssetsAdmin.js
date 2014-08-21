module.exports = function (grunt) {
    grunt.registerTask('compileAssets', [
        'clean:dev',
        'jst:dev',
        'less:admin',
        'copy:dev',
        'coffee:dev'
    ]);
};