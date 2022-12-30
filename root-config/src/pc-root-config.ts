import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

// type MyCustomPropType = {a: string; b: number}

// registerApplication<MyCustomPropType>({
//   name: "@pc/nav-bar",
//   app: () => System.import("@pc/nav-bar"),
//   activeWhen: ["/"]
// });

applications.forEach(registerApplication);
layoutEngine.activate();
start();
