 
## Exploring different implementations of drag-drop behaviour in React

The purpose of this repo is to compare different drag-drop implementations, with working examples.

### Vanilla React Implementation

This was built following [the steps described here](https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/).

Packages used: none

### React-dnd Implementation

Judging from the number of open issues and open PRs, it doesn't look like this package receives 
a lot of maintenance or updates. [The docs are outdated and inconsistent.](http://react-dnd.github.io/react-dnd/about)

Here were some bugs that I encountered ...

* Can't change opacity of items on drag - online examples don't work
* hideSourceOnDrag doesn't seem to work
* the "preview image" on a dragged item only loads the first time you drag it

Packages used: 

```
"react-dnd": "^7.5.0",
"react-dnd-html5-backend": "^7.5.0",
```

### React-beautiful-dnd Implementation

[Here is a free tutorial on how to use this package](https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd).

The functionality seems quite limited to implementing it *exactly* how the tutorial says, ie. they really mean it when they say the 
use-case of the repo is specifically for lists. Some bugginess experienced with regard to the indices assigned to components. Not sure
if this is because of aberrations in my implementation or actual bugs.

Packages used: 

```
"react-beautiful-dnd": "^11.0.3",
```

### 'React Drag and Drop' npm package

Packages used: 

```
"react-drag-and-drop": "^3.0.0",
```

### DIY implementation

Packages used:

```
"react-cursor-position": "^3.0.3",
```

------------------------------------------------------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
