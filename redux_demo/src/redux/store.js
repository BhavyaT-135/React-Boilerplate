import { configureStore } from '@reduxjs/toolkit';
import reducers from "./reducers/index"

//The createStore function takes a reducer as an argument and returns a store object.

const store = configureStore(
    { reducer: reducers },
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;