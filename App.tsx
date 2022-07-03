import React from 'react';
import { AppProvider } from './src/contexts/AppContext';
import Routes from './src/routes';

const App = () => {
  return(
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}
export default App;