//views/data.js
import { JetView } from "webix-jet";
import { data } from "../models/records";

export default class DataView extends JetView {
  config() {
    return {
      view: "window",
      head: "My Window",
      close: true,
      modal: true,
      body: {
        id: "tab",
        view: "datatable",
        autoConfig: true,
      },
    };
  }
  init(view: any) {
    let tab = this.$$("tab") as webix.ui.datatable;
    tab.parse(data, "json");
  }
}

// sdvdsvsdvsdvsdvsdvdvsdvsdv
