# built-frontends
This is used along with github pages so that we can deploy the frontends in a test environment.

## To add new module-federation frontend:
  - Build it, and copy the built assets into a new directory in the github-pages directory in this repository. remoteEntry.js should be there.
  - Check for https://ufc-interfaces.github.io/built-frontends/github-pages/<your-app-name>-assets/remoteEntry.js, it should
return the script content.
  - Integrate your app in the frontend-runtime application and test it. 

