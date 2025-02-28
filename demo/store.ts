import {manage} from "manate";

export class Preferences {
  mode: "both" | "editor" | "preview" = "preview";
  toolbar: "show" | "hide" | "none" = "none";
  theme: "auto" | "light" | "dark" = "auto";
}

export class Store {
  preferences = new Preferences();
  preferencesModalOpen = false;
}

export default manage(new Store());
