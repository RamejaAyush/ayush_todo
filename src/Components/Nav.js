import "../styles/Nav.css";

const Nav = () => {
 return (
  <>
   <nav>
    <h1> Hi, there this is your Todo List</h1>
    <div className="navLinks">
     <a href="#invalid">
      <i class="fab fa-github"></i>
     </a>
    </div>
   </nav>
   <img
    src="https://images.pexels.com/photos/3831847/pexels-photo-3831847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="Background"
    id="background"
   />
  </>
 );
};

export default Nav;
