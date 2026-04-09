import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#000000',
      padding: '1.5rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }}>
      <div style={{
        color: '#ffffff',
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '1rem'
      }}>
        INBB
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
      }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about-founders" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            About the Founders
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contests" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            The Contests
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/regional-brain-bee" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            Regional Brain Bee
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/winners-2026" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            Winners of Regional Brain Bee 2026
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/inbb-final" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            Indian National Brain Bee (INBB)Final
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sponsor" 
            style={({ isActive }) => ({
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 'normal',
              whiteSpace: 'nowrap',
              borderBottom: isActive ? '2px solid #00ff00' : 'none'
            })}
          >
            The Sponsor
          </NavLink>
        </li>
        <li>
          <a 
            href="https://www.inbb.in/?s=" 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
