import {createStackNavigator, createAppContainer} from 'react-navigation';
import Update from './update';
import Main from './main';

const MainNavigator = createStackNavigator({
  Update: {screen: Update},
  Main: {screen: Main}
}, {initialRouteName: 'Main'});

const Navigation = createAppContainer(MainNavigator);

export default Navigation;