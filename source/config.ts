import { JetView } from "webix-jet";
import MainConfig from "./MainConfig";

export default class MainView extends JetView {
  config() {
    return MainConfig();
  }
}
