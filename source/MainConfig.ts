export default function MainConfig() {
  return {
    cols: [
      { view: "menu" },
      { template: '<a route="data">Data</a>' },
      { $subview: true, popup: true },
    ],
  };
}
