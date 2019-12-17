import { observable, computed } from "mobx";
import { createContext } from "react";

class ResourceStore {
  @observable life: number = 100;
  @observable metal: number = 0;
  @observable wood: number = 0;

  @computed get planet() {
    return 100 - (this.metal * 0.2 + this.wood * 0.1);
  }
}

export const ResourceStoreContext = createContext(new ResourceStore());
