import { Link } from 'react-router-dom';


// styles
import './Navbar.css';

// components
import SearchBar from './SearchBar';

export default function Navbar() {
    

    return (
        <div className='navbar'>
            <nav>
               <Link to="/" className='brand'>
                    <h1>Jobico</h1>
               </Link> 
               <SearchBar />
               <Link to="/create">Add Job</Link>
            </nav>
        </div>
  )
}
