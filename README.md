# Electron starting server and serving React WebApp (Proof of Concept)

This is a Proof of Concept of an Electron app starting a Node js server to serve the React web application also in a web browser outside of Electron.

At root folder, do `npm run build` to call `buildForProd.sh` file. 
 - Build folder will be created with transpiled React files and an electron js file which creates a server and serves the statics when Electron app opens.
 - Dist folder contains Electron app executables. Once app is opened, you can navigate with your browser to localhost:8081 to see how the server serves the statics from React.

If build fails, check that
 - node_modules is up to date
 - No electron processes are running 

## How it works?  

The file electron.js creates a Node server at localhost:8081. This server will serve the statics files from the compiled app.asar file first created by Electron to the Client (the browser).


[About me - jpadilladev](https://webstilos.es)

---

This project was based on the fullstack project https://github.com/seanpmaxwell/TypeScriptFullStackShell 

