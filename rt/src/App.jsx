import { useState } from 'react';
import './App.css';
import Context from './Context';
import Footer from './Footer';

import Header from './Header';

const App =()=> {
  const [name,setName] = useState("хуй")

  return (
    <div className="App">
      
      <Header setName={setName}/>
      <Context name={name}/>
      <Footer />

    </div>
  );
}

export default App;
