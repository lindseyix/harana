module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            src: {
                files: ['**/*.scss', '**/*.php'],
                tasks: ['compass:dev']
            },
        },
        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    imagesPath: 'images',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};