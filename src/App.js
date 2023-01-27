import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Top10 from './components/top10/top10';
import Realtime from './components/realtimeInv/realtimeInv';
import Historic from './components/historicInv/historicInv';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Routes>
          <Route path='/top-10' exact element={<Top10/>}/>
          <Route path='/realtime-investment' exact element={<Realtime/>}/>
          <Route path='/historic-investment' exact element={<Historic/>}/>
          <Route path='/about' exact element={<About/>}/>
        </Routes>


      {/* <Route path="/realtime-investment" component={Contact} />
        <Route path="/historic-investment" component={Contact} />
        <Route path="/cryptocurrencies-info" component={Contact} />
        <Route path="/about" component={About} /> */}

    </div>
  );
}

export default App;
