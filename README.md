# Slique
Uses Boostrap 4 Beta and [sass](http://sass-lang.com/), concatenation, minification, autoprefixer, [Browsersync](https://www.browsersync.io/), editor config file, reloading and sourcemaps all run by [Gulp](https://gulpjs.com/).

## Quick Start
```
# 1 Clone this repo
git clone https://github.com/beeeees/doist.git

# 2 Navigate into the repo directory
cd doist

# 3 Install all node packages
npm install

# 4 Get started
gulp serve - starts localhost server with browser-sync, watches html sass js with hot reloading
gulp - minify css/js and builds your app into the dist directory, ready for production
```

## Requirements
This project requires you to have a installation of [nodejs](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm)
This project also requires you to have global installations of [gulp](http://gulpjs.com/).
```
# Install gulp globally
npm install -g gulp
```

## Gulp commands
**gulp serve**

The gulp serve command starts a local Browsersync server that serves your files in the browser.
It automatically reload the current page when changing html, sass and js files.
The output of all sass files go to main.css.
All js files are concatenated into main.js.
You can access the project live in development with other devices on the same network. Go to the "External" address specified by Browsersync in the terminal in the browser of your device.
```
gulp serve
```

**gulp (build)**

The default gulp command is set to creating a "public" directory with a production version of the project, ready to be deployed.
It minifies and renames js/css assets as well as cleaning the old "public" directory. CSS is autoprefixed for the latest two browser versions.
```
gulp
```

**gulp concatScripts**

The gulp concatScripts command combines the specified js ressources into main.js.
You can add new js files to this command on line 16 in gulpfile.js
You might want to run concatScripts once seperately after adding new js files.
```
gulp concatScripts
```

## Heroku deployment
Support for heroku deployment via `http-server` and a `procfile`.
`git push heroku master` will execute the start and the build/post install scripts.
[http://test-project-bb.herokuapp.com/](http://test-project-bb.herokuapp.com/)
