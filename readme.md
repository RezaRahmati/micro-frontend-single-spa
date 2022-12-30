## create new project
`npx create-single-spa`

## react
- in the react app update `start` script and add `--port 9xxx` to it
- in the root-config project update `pc-root-config.ts` file and add the new app there
- in the root-config project update `microfrontend-layout.html` file and add the new app there

## angular
- make sure you add below code to your app-routing.module.ts
```
  providers: [
    { provide: APP_BASE_HREF, useValue: '/REPLACE-WITH-YOUR-ROUTE' }
  ]
```
- find and replace all `app-root` to `xxx-app-root` which xxx is name of your app 

## React for this poc
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

## Anguler for this poc
- `npm i devextreme devextreme-angular @ngneat/until-destroy`
- update `body` in the `index.html` to `<body class="dx-viewport">`
- add `"node_modules/devextreme/dist/css/dx.material.orange.light.css",` to both `styles` sections in `angular.json`
- add a new script in `package.json` as `"serve": "ng serve",` and update your existing start command to `"start": "npm run serve:single-spa:xxx",` which xxx is name of your app 
- comment out `import 'zone.js'; ` in the `polyfills.ts` 

## links
https://medium.com/swlh/developing-and-deploying-micro-frontends-with-single-spa-c8b49f2a1b1d
https://blog.bitsrc.io/building-microfrontends-using-single-spa-framework-94019ca2fb4d

Angular example
https://github.com/joeldenning/coexisting-angular-microfrontends