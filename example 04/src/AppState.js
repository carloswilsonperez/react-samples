import {observable, computed, action} from 'mobx';

class AppState {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }

  @computed get duplicateValue() {
    return this.count * 2;
  }
}

export default AppState;
