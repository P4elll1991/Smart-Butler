import { JetApp, HashRouter } from "webix-jet";
import MainView from "./config";
import DataView from "./views/data";
const App = new JetApp({
  id: "dashboard",
  start: "/dashboard",
  router: HashRouter,
  views: {
    dashboard: MainView,
    data: DataView,
  },
});

webix.ready(() => {
  App.render();
});
// fdsvdv
