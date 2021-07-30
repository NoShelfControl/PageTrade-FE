import React, { useState } from 'react';
import styles from './ProfileForm.module.css';
import { useUpdateUser } from '../../context/AuthContext';

export default function Profile(user) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [status, setStatus] = useState('');

  const update = useUpdateUser();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setStatus('Changes complete!');
    await update({ ...user, userName: name, bio });
  };

  return (
    <section className={styles.editingContainer}>
      <form 
        className={styles.profileForm}
        onSubmit={handleSubmit}>
        <input
          className={styles.profileInputs}
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          className={styles.profileInputs}
          type="text"
          name="bio"
          value={bio}
          placeholder="Bio"
          onChange={handleBioChange}
        />
        <button>UPDATE</button>
        <p>{status}</p>
      </form>
    </section>
  );
}
