# library
react:
  react: down
  react-app-polyfill: npm install react-app-polyfill
  react-dom: down
  react-rnd: npm i -S react-rnd
  react-router: npm i react-router
  react-router-dom: npm i react-router-dom
  react-scripts: down

  yarn:
  react-redux-loading-bar: yarn add react-redux-loading-bar
  react-virtualized: yarn add react-virtualized
  connected-react-router: yarn add connected-react-router
  recompose: yarn add recompose
  react的高级函数组件
  https://github.com/acdlite/recompose

redux:
  yarn:
  redux: yarn add redux
  react-redux: yarn add react-redux
  redux-logger:
    yarn add redux-logger
    yarn add @types/redux-logger
  redux-saga: yarn add redux-saga
  redux-devtools: yarn add redux-devtools
  redux-form: yarn add redux-form

typescript:
  typescript: yarn add typescript
  typescript-fsa: yarn add typescript-fsa
  typescript-fsa-reducers: yarn add typescript-fsa-reducers

other:
  antd: yarn add antd 　 #Ant Design
  axios: yarn add axios
  bignumber.js: yarn add bignumber.js
  blob: yarn add blob
  env-cmd: yarn add env-cmd
  file-saver:
    yarn add file-saver
    yarn add @types/file-saver
  history: yarn add history
  lodash:
    yarn add lodash
    yarn add @types/lodash
  moment: yarn add moment
  prettier:
    yarn add prettier
  material-UI:
  yarn add @mui/material @emotion/react @emotion/styled
  yarn add @mui/material @mui/styled-engine-sc styled-components

  yarn:
  yarn add @material-ui/core
  yarn add @material-ui/styles
  yarn add @material-ui/lab
  yarn add @material-ui/icons
@
  @date-io/moment
  @grapecity/wijmo.react.all
  @material-ui/core
  @material-ui/icons
  @material-ui/lab
  @types/file-saver
  @types/lodash
  @types/moment
  @types/node
  @types/react yarn add @types/react
  @types/react-dom yarn add @types/react-dom
  @types/react-virtualized yarn add @types/react-virtualized
  @types/redux-form yarn add @types/redux-form

"scripts": {
    "start": "react-scripts start,",
    "build": "react-scripts build,",
    "build:maintenance": "env-cmd -f .env.maintenance react-scripts build,",
    "build:production": "env-cmd -f .env.production react-scripts build,",
    "build:merge": "env-cmd -f .env.merge react-scripts build,",
    "lint": "tslint --fix --force --format stylish --project ./tsconfig.json ./{src,__tests__}/**/*.{ts,tsx}",
    "typedoc": "typedoc --exclude ./src/__tests__/**/*.test.ts --mode modules --out ./docs/ .src/"
}

"devDependencies": {
    "@material-ui/pickers": "3.2.5",
    "@types/history": "^4.7.2",
    "@types/pretty-format": "^20.0.1",
    "@types/react-redux": "^7.1.4",
    "@types/react-router-dom": "^4.3.3",
    "@types/react-test-renderer": "^16.8.3",
    "@types/recompose": "^0.30.6",
    "@types/redux-logger": "^3.0.7",
    "node-sass": "^4.12.0",
    "pretty-format" "^24.8.0",
    "react-test-renderer" "^16.8.6",
    "redux-devtools-extension": "^2.13.8",
    "tslint": "^5.17.0",
    "tslint-config-prettier": "^1.18.0",
    "tslint-plugin-prettier": "^2.0.1",
    "tslint-react": "^4.0.0",
    "typedoc": "^0.15.0"
}
"homepage": "./",
"proxy": "http://www.yahoo.co.jp"

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
