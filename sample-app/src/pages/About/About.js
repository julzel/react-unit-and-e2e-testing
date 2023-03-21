import React from 'react';
import UsersListContainer from '../../components/UsersList/UsersListContainer';

function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis,
        nunc ut hendrerit euismod, felis felis varius est, non laoreet quam
        nibh sed dui.
      </p>
      <h2>Community</h2>
      <UsersListContainer />
    </div>
  );
}

export default About;
