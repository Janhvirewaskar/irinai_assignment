// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Clients = () => {
//   const [clients, setClients] = useState([]); // State to store the list of clients
//   const token = localStorage.getItem('token'); // Get the token from localStorage

//   useEffect(() => {
//     if (token) {
//       // Send the token in the Authorization header
//       axios.get('http://localhost:5000/api/user/all', {
//         headers: {
//           Authorization: `Bearer ${token}`, // Send the token as a Bearer token
//         },
//       })
//       .then(res => {
//         setClients(res.data); // Set the clients data into the state
//       })
//       .catch((err) => {
//         console.error('Error fetching clients:', err);
//         alert('Error fetching clients'); // Show an error if the request fails
//       });
//     } else {
//       alert('No token found, please log in');
//     }
//   }, [token]); // Dependency array ensures this effect runs whenever the token changes
//   const handleLogout = () => {
//     logout(); // Log the user out
//     navigate('/'); // Redirect to login page
//   };
//   return (
//     <div>
//       <h2>All Clients</h2>
       
    
//       {clients.length === 0 ? (
//         <p>No clients found.</p> // Display a message if no clients are found
//       ) :
//        (
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//           gap: '20px',
//           padding: '20px',
//         }}>
//           {clients.map(client => (
//             <div key={client._id} style={{
//               background: '#fff',
//               padding: '20px',
//               borderRadius: '12px',
//               boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
//               transition: 'transform 0.2s ease-in-out'
//             }}>
//               <h3 style={{ marginBottom: '10px' }}>{client.firstName} {client.lastName}</h3>
//               <p><strong>Email:</strong> {client.email}</p>
//             </div>
            
//           ))}
          
//         </div>
        
//       )}
            

//     </div>
    
//   );
// };

// export default Clients;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

const Clients = () => {
  const [clients, setClients] = useState([]);
  const token = localStorage.getItem('token');
  const { logout } = useAuth(); // Access logout function
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5000/api/user/all', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setClients(res.data);
      })
      .catch((err) => {
        console.error('Error fetching clients:', err);
        alert('Error fetching clients');
      });
    } else {
      alert('No token found, please log in');
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>All Clients</h2>

      {/* Profile & Logout Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <button
          onClick={handleProfile}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#0984e3',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Profile
        </button>

        <button
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            fontSize: '14px',
            backgroundColor: '#d63031',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Logout
        </button>
      </div>

      {clients.length === 0 ? (
        <p style={{ textAlign: 'center', marginTop: '40px' }}>No clients found.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          padding: '20px',
        }}>
          {clients.map(client => (
            <div key={client._id} style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s ease-in-out'
            }}>
              <h3 style={{ marginBottom: '10px' }}>{client.firstName} {client.lastName}</h3>
              <p><strong>Email:</strong> {client.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;





const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const profileButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#0984e3',
  color: '#fff',
};

const logoutButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#d63031',
  color: '#fff',
};
