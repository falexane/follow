import React from 'react';
import SwipeableButton from './SwipeableButton'
import './App.css';

function App() {

  return (
    <div className="App">
        <div className='container'>
            <div className='block'>
                <SwipeableButton color='#6ab04c' text='SLIDE TO UNLOCK' />
            </div>
        </div>
    </div>
  );
}

export default App;
