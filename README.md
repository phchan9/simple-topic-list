This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). I use react+redux to implment this simple-topic-list project.

## Depolyment

Use buildpack provided by Heroku. See the [introductory blog post](https://blog.heroku.com/deploying-react-with-zero-configuration) and entry in [Heroku elements](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack).
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
