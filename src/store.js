import { observable, action, makeObservable, computed } from "mobx";

class GlobalStore {
  isAuth = false;
  isAdmin = false;

  constructor() {
    makeObservable(this, {
        isAuth: observable,
        isAdmin: observable,
        setIsAuth: action,
        setIsAdmin: action,
        getIsAuth: computed,
        getIsAdmin: computed
  });
}

setIsAuth(value) {
    this.isAuth = value;
}

setIsAdmin(value) {
    this.isAdmin = value;
}

get getIsAuth() {
    return this.isAuth;
}

get getIsAdmin() {
    return this.isAdmin;
}
}

const store = new GlobalStore();
export default store;
