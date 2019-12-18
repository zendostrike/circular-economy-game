import { observable, computed, action } from "mobx";
import { createContext } from "react";

class ResourceStore {
  @observable metal: number = 0;
  @observable wood: number = 0;

  @computed get planet() {
    return 100 - (this.metal * 0.2 + this.wood * 0.1);
  }
}

class PlayerStore {
  @observable health: number = 100;
  @observable budget: number = 10;

  @action.bound
  increment() {
    if (this.health > 0) {
      this.health--;
    }
  }
}

const playerStore = new PlayerStore();
setInterval(playerStore.increment, 1000);

export const ResourceStoreContext = createContext(new ResourceStore());
export const PlayerStoreContext = createContext(playerStore);
