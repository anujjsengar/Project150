import React, { useEffect, useState } from 'react';

const NoteCard = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('/api/notes');
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });
    setNotes(notes.filter(note => note._id !== id));
  };

  return (
    <div>
      {notes.map(note => (
        <div key={note._id} className="note-card">
          <h3>{note.content}</h3>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteCard;