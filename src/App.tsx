import { Routes, Route } from 'react-router-dom';
import { Layout } from './app/layouts/Layout';
import { Home } from './pages/Home';
import { Trips } from './pages/Trips';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/trips" element={<Trips />} />
      </Route>
    </Routes>

  )
}

export default App
