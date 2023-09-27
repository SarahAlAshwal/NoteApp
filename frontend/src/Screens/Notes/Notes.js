import React, { useEffect, useState } from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import { Badge, Button, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import axios from 'axios';

const Notes = () => {
  const [notes, SetNotes] = useState([]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
    }
  };

  const fetchNotes = async () => {
    const { data } = await axios.get('/api/notes');
    SetNotes(data);
    console.log(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <MainScreen title="Welcom Back Sarah Al-Ashwal">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card style={{ margin: 10 }}>
            <Accordion.Item eventKey="0">
              <Card.Header style={{ display: 'flex' }}>
                <span
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                    flex: 1,
                    cursor: 'pointer',
                    alignSelf: 'center',
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Header>
                </span>
                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      created on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Accordion.Item>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Notes;
