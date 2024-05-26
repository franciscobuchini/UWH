//APP.JSX
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

import Conditions from './Layouts/Conditions';
import Header from './Layouts/Header';

function App() {

  let [showConditions, setShowConditions] = useState(true);
  let handleContinue = () => {
    setShowConditions(false);
  };

  return (
    <Provider store={store}>
      <div className="TotalApp"> {showConditions ? (
          <Conditions onContinue={handleContinue} />
        ) : (
          <div className="App_Screen">
            <Header />
          </div>
        )}
      </div>
    </Provider>
  );
}

export default App;