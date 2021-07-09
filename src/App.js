import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header  from './components/layouts/Header'
import CustomerDashboard from './components/customer/Home'

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
         <Header />
         <CustomerDashboard />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
