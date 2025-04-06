import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { token, user } = useAuth();
  const [form, setForm] = useState(user || {});

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/user/me`, form, {
        headers: { Authorization: token },
      });
      alert('Profile updated');
    } catch (err) {
      alert('Update failed');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2 >Profile</h2>
      <input
        type="text"
        value={form.name || ''}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        value={form.email || ''}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default Profile;