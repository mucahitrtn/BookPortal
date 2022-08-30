import './App.css';
import Main from './pages/Main';
import Favouritelist from "../src/pages/Favouritelist";
import Loginpage from './pages/Loginpage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Readlist from './pages/Readlist';
import Profilepage from './pages/Profilepage';
import LocalStorageUtil from "../src/util/LocalStorageUtil";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './pages/Admin';
import Books from './pages/Books';


function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route exact path='books' element={<Books />} />
          <Route exact path='favouritelist' element={<Favouritelist />} />
          <Route exact path='readlist' element={<Readlist />} />
          <Route exact path="profile" element={<Profilepage />} />
          <Route exact path='login' element={<Loginpage />} />
          <Route exact path='admin' element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;


/*
<Route path='/' exact element={<SharedLayout />}>
            <Route index element={<Main />} />
            <Route path='favouritelist' element={<Favouritelist />} />
            <Route path='readlist' element={<Readlist />} />
            <Route path='profile' element={<Profilepage />} />
            <Route path='/login'>
            {LocalStorageUtil.getToken !=null ? <Loginpage /> : <Loginpage /> }            
            </Route>
          </Route>
          */