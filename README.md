# NESB [![Build Status](https://travis-ci.org/zniszcz/ci-exercise.svg?branch=master)](https://travis-ci.org/zniszcz/ci-exercise)
STATIC WEBPACK BOILERPLATE

## Getting Started

### Prerequisites

Node >= 8.x.x

### Installing

Install dependencies

```
npm install
```

## Running in development mode

### Starting dev server

```
npm run start
```

### Adding templates
Add template to /src/templates/

### Adding scripts
Add script to /src/js/

### Adding styles
Add style file to /src/scss/
Import new styles file in main.scss


## Building for production

```
npm run build
```

Files will be built into 'dist' directory

## Icon font

Font is built with svg files from /src/svg.

### Adding new icon
To add new icon simply put svg file in thier directory - icon has to be 100x100px square.

### Using
Its possible to configure fonts name - change its name in config file.
To use icon:
```
<span class="fontName fontName-svg-file-name"></span>
```

## Known issues

1. It is required to reset dev server to add new template
