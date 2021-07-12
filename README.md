# Sample Single Repo Application

### [Client App]('./client)
Client contains a create-react-app application with a "proxy" set to localhost:5000 in [package.json](./client/package.json#L38)-- this removes the need to set any URL environment variables because we're making the app think everything is being served from the same location

### [Express App](https://github.com/alchemycodelab/sample-single-repo/blob/main/app.js#L17:L23)

We setup the express app to serve the react application in production for any routes that don't match `api`. 

### Deployment
App is deployed on Heroku and uses a `postbuild` step in [package.json](https://github.com/alchemycodelab/sample-single-repo/blob/main/package.json#L7) to build the client. 