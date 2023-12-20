import React from 'react';
import './App.css';
import ButtonSayHello from './components/buttons/ButtonSayHello';
import MyContacts from './components/MyContacts';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-secondary font-wieght-bold">Mes Contacts</h1>
          <MyContacts />
          <ButtonSayHello />
        </div>
      </div>
    </div>
  );
}

export default App;
