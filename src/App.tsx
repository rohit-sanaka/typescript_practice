import './App.css';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import Button from './components/props/Button';
import Greet from './components/props/Greet';
import Heading from './components/props/Heading';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import CursorLocation from './components/renderProps/CursorLocation';

function App() {
  const personName = {
    first: 'Rohit',
    last: 'Kumar',
  };

  const nameList = [
    {
      first: 'Rohit',
      last: 'Kumar',
    },
    {
      first: 'Sai',
      last: 'Madan',
    },
    {
      first: 'Dileep',
      last: 'Sharma',
    },
  ];

  return (
    <>
      <Greet name='Rohit' isLoggedin={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Heading>Rohit Kumar Sanaka</Heading>
      <Heading>
        <div>Rohit</div>
      </Heading>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <CursorLocation />
    </>
  );
}

export default App;
