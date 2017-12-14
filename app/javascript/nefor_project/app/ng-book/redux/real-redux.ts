import { Action, Reducer, Store, createStore } from "redux";

interface AppState {
  messages: string[];
}

let initialState: AppState = { messages: [] };

let reducer: Reducer<AppState> = (state: AppState = initialState, action: Action) => {

}

let store: Store<AppState> = createStore<AppState>(reducer);
