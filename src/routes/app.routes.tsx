import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import MovieDetails from '../pages/MovieDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#312e38'},
    }}
    initialRouteName="SignIn">
    <App.Screen name="SignIn" component={SignIn} />
    <App.Screen name="Home" component={Home} />
    <App.Screen name="MovieDetails" component={MovieDetails} />
  </App.Navigator>
);

export default AppRoutes;
