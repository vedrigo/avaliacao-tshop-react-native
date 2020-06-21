import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import store from './app/store';
import {Provider} from 'react-redux';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{flex: 1, backgroundColor: '#312e38'}}>
        <Routes />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
