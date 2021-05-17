import './App.css';
import store from './Store'
import { Provider } from "react-redux";
import Route from './Routing/route';

function App() {
  return (
    <Provider store={store}>
      <Route/>
    </Provider>
  );
}

export default App;
