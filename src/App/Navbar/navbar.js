import {NavLink} from 'react-router-dom';
import './navbar.css';
const activeLink = (isActive) =>{
   return isActive.isActive? 'selected':''
}

const logout= (e)=>{
  e.preventDefault();
  if(sessionStorage.getItem("user")){
    sessionStorage.removeItem("user")
    window.location.reload()
  }
}
function NavBar() {
  return (
    <nav>
        <NavLink to="/home" className={activeLink}>Home</NavLink> 
        <NavLink to="/about" className={activeLink}>About</NavLink> 
        <NavLink to="/jobs" className={activeLink}>Jobs</NavLink> 
        <NavLink to="/contact" className={activeLink}>Contact</NavLink> 
        <button className='logoutBtn' onClick={logout}>Logout</button>
    </nav>
  );
}

export default NavBar;
