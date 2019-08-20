import React, {Fragment} from 'react';
import configureStore from './src/store/store';
import  {Provider} from 'react-redux';
import Main from './src/components/main';
import Navigation from './src/components/navigation';

const store = configureStore()
class App extends React.Component {
  render() {
    return(
      <Provider store={ store}>
        <Navigation/>
      </Provider>
    );
  }
}
export default App;