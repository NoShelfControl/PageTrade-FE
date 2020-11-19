import React, { useState } from 'react';
import { useUpdateUser } from '../../context/AuthContext';

export default function Profile({ user }) {

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const update = useUpdateUser();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };



  const handleSubmit = async(e) => {
    e.preventDefault();

    await update({ ...user, 
      userName: name, 
      bio });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="User Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="bio"
          value={bio}
          placeholder="Bio"
          onChange={handleBioChange}
        />
        <button>Edit Profile</button>
      </form>
    </section>
  );
}
