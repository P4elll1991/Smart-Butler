import { JetApp, HashRouter } from "webix-jet";
import MainView from "./config";
import DataView from "./views/data";
import TopView from "./views/top";
const App = new JetApp({
  id: "dashboard",
  start: "/dashboard",
  router: HashRouter,
  views: function (url: string): any {
    switch (url) {
      case "dashboard":
        return MainView;
      case "data":
        return DataView;
      case "top":
        return TopView;
      default:
        console.error("Не найдено представление: " + url);
        return {};
    }
  },
});

webix.ready(() => {
  App.render();
});
// fdsvdv
