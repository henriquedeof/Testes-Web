import React from 'react';
import {AuthProvider} from "./contexts/auth";
import Routes from "./routes";


const App: React.FC = () => {

    //new comment for testing.

  return (
      <AuthProvider>
          <Routes />
      </AuthProvider>
  );

}

export default App;
