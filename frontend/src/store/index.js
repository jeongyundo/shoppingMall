import { createStore , applyMiddleware, compose} from 'redux'
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(){
    const store = createStore(composeEnhancers(applyMiddleware(reduxThunk)));
    return { store }
}