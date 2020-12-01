const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    // .postCss('resources/css/app.css', 'public/css/tailwind.css', [
    //     require('postcss-import'),
    //     require('tailwindcss'),
    // ])
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig(require('./webpack.config'));
