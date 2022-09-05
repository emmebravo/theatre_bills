import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/PrivateRoute';
import Feed from './components/Feed';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        {/* <Route
          exact
          path='/feed'
          element={
            <ProtectedRoute user={user}>
              <Feed />
            </ProtectedRoute>
          }
        /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
