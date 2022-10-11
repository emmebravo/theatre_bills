import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import CreateShow from './components/CreateShow';
import Feed from './components/Feed';
// import Show from './components/Show';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route exact path='/feed' element={<Feed />} />
          <Route exact path='/create-show' element={<CreateShow />} />
          {/* <Route exact path='/feed/:id' element={<Show />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
