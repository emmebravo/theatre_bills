import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import CreatePost from './components/CreatePost';
import Feed from './components/Feed';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className='container mx-auto mt-10'>
        <Routes>
          <Route exact path='/' element={<Hero />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/create-show' element={<CreatePost />} />
          {/* <Route
          exact
          path='/feed'
          element={
            <ProtectedRoute user={user}>
              <Feed />
            </ProtectedRoute>
          }
        /> */}
          <Route path='/feed' element={<Feed />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
