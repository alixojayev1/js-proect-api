import loaderS from "./modules/loader";
import modal from "./modules/modal";
import slider from "./modules/slider";
import tabs from "./modules/tabs";
import tgmBot from "./modules/tgmBot";
import timeS from "./modules/time";

window.addEventListener("DOMContentLoaded", () => {
  tabs();
  loaderS();
  timeS();
  modal();
  tgmBot();
  slider();
});
