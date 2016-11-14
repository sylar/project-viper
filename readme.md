# Project viper.

This is a seed for `React` projects that uses most of the bleeding edge tools and techniques.
The seed follows the concept of tree shaking with the help of webpack2 and babel6.

## Prerequisites.

I recommend using `yarn` but the classic `npm` will do just fine.

## How to use.

clone the project somewhere.
```
> git clone <this_project>
```

move to the previously cloned location and install dependencies.
```
> cd project-viper
> yarn
```

start the dev server
```
> yarn start
```

open `localhost:3000` in your browser.

start creating.

## Project structure.
```
.
├── package.json
├── postcss.config.js
├── readme.md
├── server.js
├── src
│   ├── assets
│   │   ├── images
│   │   │   ├── congruent_outline.png
│   │   │   └── crossword.png
│   │   └── template.html
│   ├── components
│   │   ├── App
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── RandomNumber
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Root.js
│   │   ├── RoundImage
│   │   │   └── index.js
│   │   └── WelcomeNote
│   │       └── index.js
│   └── index.js
├── stats.json
├── webpack.config.dev.js
├── webpack.config.prod.js
└── yarn.lock
```
Each component can have it's own `.css` file that is required in the component's exported `.js` file. Because of using `css modules` the style is scoped in the component and there are no global selectors exposed.

This project uses tachyons, being the only global classes available throughout the project. For overriding variables, at the moment, just rewrite them in the `.css` file for each component.

Contents of the `assets` folder are linked on dev env and optimised when building for production.

# Run for production.

```
> yarn run build
```

The `static` folder will appear in the project root having the following structure.

```
static
├── assets
│   └── images
│       └── background.png
├── css
│   ├── style.css
│   └── tachyons.css
├── index.html
└── js
├── main.js
└── vendor.bundle.js
```

## Seen a problem?
If you find a better way to do something or simply want to add a new feature, just PR. Every little bit of help is welcomed 😀

## Other features.
* tree shaking.
* css modules.
* tachyons.
* hot module realoading (while maintaining the state).
* webpack2.
* webpack dashboard.

## TO DO.
- [ ] Add redux.
- [ ] Discard unused css classes.
- [ ] Testing.
- [ ] SSR.
- [ ] Improve Readme.
- [ ] Add `serve` for production build testing.
- [ ] Create NPM package for auto-scaffold.

## License.

The MIT License (MIT)

Copyright (c) 2016 Andrei Constantinescu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
