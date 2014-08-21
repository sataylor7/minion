module.exports = function (grunt) {
    grunt.registerTask('compileAssets', [
        'clean:dev',
        'jst:dev',
        'less:public',
        'copy:dev',
        'coffee:dev'
    ]);
};