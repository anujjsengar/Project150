import React from 'react';
import NoteForm from '../components/NoteForm';
import NoteCard from '../components/NoteCard';

const Home = () => {
  return (
    <div>
      <NoteForm />
      <NoteCard />
    </div>
  );
};

export default Home;