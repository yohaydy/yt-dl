## URL: https://guarded-shore-81468.herokuapp.com/

## Run locally:
1. `docker build . -t dl`
2. `docker run -p 8080:8080 dl`
3. Navigate to http://localhost:8080/

## Deploy
1. Add heroku git remote if does not exist
    `heroku git:remote -a guarded-shore-81468`
2. Commit changes to master
3. Deploy
    `git push heroku master`
