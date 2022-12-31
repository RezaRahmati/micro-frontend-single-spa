## Micro FrontEnd
Micro-frontend architectures decompose a front-end app into individual, semi-independent “microapps” working loosely together. This can help make large projects more manageable, e.g. when transitioning from legacy codebases.

![Micro Frontend](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/micro-frontend.jpeg?raw=true)

## Technology stack in this project
- [single-spa](https://single-spa.js.org/) 
- [Angular 14](https://angular.io/)
- [React 18](https://reactjs.org/)
- [DevExtreme](https://js.devexpress.com/)
- [NestJs](https://nestjs.com/)

## How to run
in the root
- run `npm install` which will be installing all project dependencies
- run `npm start` which will be starting all projects
- open browser and browse `http://localhost:9000` or `http://localhost:9900` ( There are two different root projects `root-config` which is EJS template and `root-config-html` which is pure js and html )

## Projects
- backend: [NestJs] : Serving backend for all projects, in reality there should be micro-services
- root-config [EJS Template] : Serving as shell to host all micro-frontend apps 
- root-config-html [JS and Html] : Serving as shell to host all micro-frontend apps 
- home [React] : A home page, that doesn't need any authentication and is the default app
- nav-bar [React] : Display Navbar on top of the app
- auth [Angular] : Angular app for login (and create new user, forget password in future)
- product [React] : Show the list and details of products
- sales [Angular] : Show the list and details of sales

Some Screenshots
![Micro Frontend - Auth](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/Auth.png?raw=true)
![Micro Frontend - Product List](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/Product-List.png?raw=true)
![Micro Frontend - Product Details](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/Product-Details.png?raw=true)
![Micro Frontend - Sales List](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/Sales-List.png?raw=true)
![Micro Frontend - Sales Details](https://github.com/RezaRahmati/micro-fe-single-spa/blob/main/images/Sales-Details.png?raw=true)

## Adding a new micro-frontend
- run `npx create-single-spa` (or you can install `create-single-spa` globally)
- follow the prompts (for apps choose application/parcel)
- apply below changes based on the framework you chose

## React changes
- in the react app update `start` script and add `--port 9xxx` to it
- in the root-config project update `pc-root-config.ts` file and add the new app there
- in the root-config project update `microfrontend-layout.html` file and add the new app there

## Angular changes
- make sure you add below code to your app-routing.module.ts
```
  providers: [
    { provide: APP_BASE_HREF, useValue: '/REPLACE-WITH-YOUR-ROUTE' }
  ]
```
- find and replace all `app-root` to `xxx-app-root` which xxx is name of your app 

## React changes for this poc
- update package.json file and change `prepare` to `"prepare": "cd .. && husky install",`
- `npm i devextreme devextreme-react react-router-dom`
- `npm i @types/react-router-dom typescript@4.7 -D`
- update `webpack.config.js` and add below code to it
```
 module: {
      rules: [
        {
          test: /\.(png|gif|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader',
        },
      ],
    },  
```
- `npm i url-loader`
- add `AuthGuardedRoute` (like product app)

## Angular changes for this poc
- `npm i devextreme devextreme-angular @ngneat/until-destroy`
- update `body` in the `index.html` to `<body class="dx-viewport">`
- add `"node_modules/devextreme/dist/css/dx.material.orange.light.css",` to both `styles` sections in `angular.json`
- add a new script in `package.json` as `"serve": "ng serve",` and update your existing start command to `"start": "npm run serve:single-spa:xxx",` which xxx is name of your app 
- comment out `import 'zone.js'; ` in the `polyfills.ts` 
- add session service and auth guard (like sales app)

## Future expansion
- deploy to production
- creating *in-browser utility modules* for style guide

## More to read
https://medium.com/swlh/developing-and-deploying-micro-frontends-with-single-spa-c8b49f2a1b1d
https://blog.bitsrc.io/building-microfrontends-using-single-spa-framework-94019ca2fb4d

## Angular example
https://github.com/joeldenning/coexisting-angular-microfrontends
