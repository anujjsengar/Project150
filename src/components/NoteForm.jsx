import React, { useState } from 'react';

const NoteForm = () => {
  const [text, setText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);

  const startRecording = () => {
    navigator.mediaDevices.getUser Media({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);
        recorder.start();
        setIsRecording(true);

        recorder.ondataavailable = (event) => {
          setAudioBlob(event.data);
        };

        recorder.onstop = () => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // Here you can handle the audio blob if needed
            // For example, you can transcribe it or save it
            setText("Transcribed text from audio");
          };
          reader.readAsArrayBuffer(audioBlob);
        };
      })
      .catch(error => {
        console.error("Error accessing audio devices:", error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = { content: text };

    await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(noteData),
    });

    setText('');
    setAudioBlob(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your note here..."
      />
      <button type="button" onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;