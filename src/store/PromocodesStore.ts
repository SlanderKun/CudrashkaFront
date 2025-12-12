import {makeAutoObservable} from "mobx";

export default class PromocodeStore {

    constructor() {
        makeAutoObservable(this);
    }



}