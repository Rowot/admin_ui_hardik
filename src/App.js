import './App.css';
import SearchBar from './components/searchbar';

import ListTable from './components/ListTable';
import { useState } from 'react';



function App() {

  const [query,updatequery] = useState("");
 
  function filter_user_count(){

  }
  
  
  return (
    <div className='App'>

      <SearchBar  updatequery={updatequery} />
      <ListTable filter_user_count={filter_user_count} query={query}/>
      </div>
  );
}

export default App;
