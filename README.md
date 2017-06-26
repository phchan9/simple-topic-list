# Simple-Topic-List [![Build Status](https://circleci.com/gh/phchan9/simple-topic-list.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/phchan9/simple-topic-list)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). I use react+redux to implment this simple-topic-list project.

## Quick Start
#### `yarn install` or `npm install`
After cloning this repo, use [yarn](https://yarnpkg.com/en/)(or npm) to install dependencies for this project.

#### `yarn start` or `npm start`
Run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test` or `npm test`
Run the test suits of this app. I use [jest](https://facebook.github.io/jest/) as my test runner which is built in Create React App and use its [Snapshot Testing](http://facebook.github.io/jest/docs/snapshot-testing.html) techniques as my UI testing with [enzyme](https://github.com/airbnb/enzyme), a testing utility for React.

## Depolyment

I deployed [this web app](http://simple-topic-list.herokuapp.com/) on [Heroku](http://heroku.com/) with the buildpack provided by them. See the [introductory blog post](https://blog.heroku.com/deploying-react-with-zero-configuration) and entry in [Heroku elements](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack).
Follow the instructions from their git repo to deploy this app:
✏️ *Replace `$APP_NAME` with a name for this app.*
``` bash
create-react-app $APP_NAME
cd $APP_NAME
git init
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```
