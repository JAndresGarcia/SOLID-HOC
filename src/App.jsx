import { useState } from 'react'
import './App.css'
import Components from './components/component';
import withSearch from './components/HOC/hoc';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="App">
      <input type="text" placeholder="Buscar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      <Components searchValue={searchValue} />
    </div>
  )
}

export default withSearch(App)
