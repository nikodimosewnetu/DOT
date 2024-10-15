import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <h2>Company Name</h2>
      <ul>
        <li><Link to="/Features">Features</Link></li>
        <li><Link to="/Enterprise">Enterprise</Link></li>
        <li><Link to="/Support">Support</Link></li>
        <li><Link to="/Home">Home</Link></li>
      </ul>
    </div>
  );
}

export default Header;
