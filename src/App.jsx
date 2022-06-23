import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users">
          <Route path="" element={<Users />} />
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
