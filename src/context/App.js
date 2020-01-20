import React from 'react'
import Amount from './Amount'
import Controls from './Controls'
import { AppContextProvider } from './AppContext'

const App = () => {

  return (
    <div className="app-container">
      <AppContextProvider>
        <Amount />
        <div className="separator" />
        <Controls />
      </AppContextProvider>
      <hr></hr>
      {"without provider: "}<Amount/>
    </div>
  )
}

export default App
