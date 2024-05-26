//APP.JSX
import React, { useState } from 'react';
import Conditions from './Layouts/Conditions';
import Time from './Components/Time';
import { Provider } from 'react-redux';
import store from '../src/Redux/Store';

function App() {
  const [showConditions, setShowConditions] = useState(true);

  const handleContinue = () => {
    setShowConditions(false);
  };

  return (
    <Provider store={store}>
      <div className="TotalScreen">
        {showConditions ? (
          <Conditions onContinue={handleContinue} />
        ) : (
          <Time />
        )}
      </div>
    </Provider>
  );
}

export default App;