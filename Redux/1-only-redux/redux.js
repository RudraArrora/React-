const redux = require ('redux');

const Initial_Value = {
    couter:0
};

const reducer = (store=Initial_Value,action) =>{
    let newStore = store;
    console.log(action);
    if (action.type == "INCREMENT") {
      newStore = { couter: store.couter + 1 };
    } else if (action.type == "DECREMENT") {
      newStore = { couter: store.couter - 1 };
    } else if (action.type == "ADDITION") {
      newStore = { couter: store.couter + action.payload.number };
    }
        
        
return newStore;
}

const store = redux.createStore(reducer)

const subscriber = ()=>{
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);
store.dispatch({type:"INCREMENT"})
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });

store.dispatch({ type: "ADDITION" ,payload:{number :7}});

