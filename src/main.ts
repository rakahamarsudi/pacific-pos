import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

///
import {Capacitor} from "@capacitor/core"
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection
} from "@capacitor-community/sqlite";
import {JeepSqlite} from "jeep-sqlite/dist/components/jeep-sqlite"

customElements.define("jeep-sqlite", JeepSqlite);

const app = createApp(App)
  .use(IonicVue)
  .use(router);

window.addEventListener("DOMContentLoaded", async() => {
  try{
    const platform = Capacitor.getPlatform();
    const sqlite = new SQLiteConnection(CapacitorSQLite);


    if(platform === "web"){
      const jeepSqliteEl = document.createElement("jeep-sqlite");
      document.body.appendChild(jeepSqliteEl);
      await customElements.whenDefined("jeep-sqlite");
      console.log("after customElements.whenDefined")

      await sqlite.initWebStore();
      console.log("after initWebstore")
    }

    const app = createApp(App).use(IonicVue).use(router);
    router.isReady().then(() => {
      app.mount("#app");
    });
  }catch (e) {
    console.log((e as any).message);
  }
})