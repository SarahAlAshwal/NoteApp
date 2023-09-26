import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Notes = () => {
  return (
    <MainScreen title="Welcom Back Sarah Al-Ashwal">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
    </MainScreen>
  );
};

export default Notes;
