interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'PLUS':
      return state + action.payload;
    default:
      return state;
  }
};

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };

console.log( reducer(0, incrementAction));
console.log( reducer(1, incrementAction));
console.log( reducer(100, decrementAction));

let plusSevenAction = { type: 'PLUS', payload: 7 };

console.log( reducer(3, { type: 'PLUS', payload: 9000}) );

class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(
    private reducer: Reducer<T>,
    initialState: T
  ) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter(l => l !== listener);
    };
  }
}

let store = new Store<number>(reducer, 0);
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log('subscribed: ', store.getState());
});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

unsubscribe();

store.dispatch({type: 'INCREMENT'});
console.log('after unsubscribe: ', store.getState());

interface ListenerCallback {
  (): void;
}

interface UnsubscribeCallback {
  (): void;
}


