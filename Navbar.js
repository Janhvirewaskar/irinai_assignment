// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     document.body.className = dark ? 'dark-mode' : '';
//   }, [dark]);

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '15px 30px',
//       background: dark ? '#1e1e2f' : '#2c2c54',
//       color: 'white',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//     }}>
//       <h2 style={{ margin: 0 }}>🔐 JWT Profile App</h2>
      
//       <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//         <button
//           onClick={() => setDark(!dark)}
//           style={{
//             background: 'transparent',
//             color: '#fff',
//             border: '1px solid white',
//             borderRadius: '6px',
//             padding: '5px 10px',
//             cursor: 'pointer'
//           }}
//         >
//           {dark ? '☀️ Light' : '🌙 Dark'}
//         </button>

//         {user ? (
//           <>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/profile">Profile</Link>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/clients">Clients</Link>
//             <button
//               onClick={logout}
//               style={{
//                 padding: '8px 14px',
//                 border: 'none',
//                 background: '#e84118',
//                 color: '#fff',
//                 borderRadius: '6px',
//                 cursor: 'pointer'
//               }}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Login</Link>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">Register</Link>

//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     document.body.className = dark ? 'dark-mode' : '';
//   }, [dark]);
//     // ✅ Auto-redirect to /clients if logged in
    

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '15px 30px',
//       background: dark ? '#1e1e2f' : '#2c2c54',
//       color: 'white',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//     }}>
//       <h2 style={{ margin: 0 }}>🔐 JWT Profile App</h2>
      
//       <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//         <button
//           onClick={() => setDark(!dark)}
//           style={{
//             background: 'transparent',
//             color: '#fff',
//             border: '1px solid white',
//             borderRadius: '6px',
//             padding: '5px 10px',
//             cursor: 'pointer'
//           }}
//         >
//           {dark ? '☀️ Light' : '🌙 Dark'}
//         </button>

//         {user ? (
//           <>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/profile">Profile</Link>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/clients">Clients</Link> {/* ✅ Clients link added here */}
//             <button
//               onClick={logout}
//               style={{
//                 padding: '8px 14px',
//                 border: 'none',
//                 background: '#e84118',
//                 color: '#fff',
//                 borderRadius: '6px',
//                 cursor: 'pointer'
//               }}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Login</Link>
//             <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = dark ? 'dark-mode' : '';
  }, [dark]);

  const handleLogout = () => {
    logout(); // Call the logout function
    navigate('/'); // Redirect to login page
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      background: dark ? '#1e1e2f' : '#2c2c54',
      color: 'white',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    }}>
      <h2 style={{ margin: 0 }}>🔐 JWT Profile App</h2>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* Dark mode toggle button */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid white',
            borderRadius: '6px',
            padding: '5px 10px',
            cursor: 'pointer'
          }}
        >
          {dark ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Conditional links based on user login status */}
        {user ? (
          <>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/profile">Profile</Link>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/clients">Clients</Link>

            {/* Logout button */}
            <button
              onClick={handleLogout} // Trigger logout function on click
              style={{
                padding: '8px 14px',
                border: 'none',
                background: '#e84118',
                color: '#fff',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Login</Link>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

