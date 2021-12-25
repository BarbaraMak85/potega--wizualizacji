import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import {Router as PageRouter} from './routing/Router';




function App() {


  return(
    <Provider store={store}>
      <Router>
          <PageRouter />
      </Router>
    
    </Provider>
    
    
  )


}

export default App;
