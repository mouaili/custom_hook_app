import React, { useEffect, useState } from 'react';
import Search from './Search';
import useUpdateDocTitle from './hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';

function MyContacts() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [filterResults, setFilterResults] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsloading(false);
      })
      .catch(error => {
        console.log(
          "Une erreur s'est produite lors du rechargement des données.."
        );
      });
  }, []);

  const filterUsers = () => {
    //function callback
    const foundUsers = users.filter(user => {
      return Object.values(user)
        .join(' ')
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });

    setFilterResults(foundUsers);
  };

  useEffect(() => {
    //condition Filter
    if (search !== '') {
      //filter
      filterUsers();
    } else {
      //remise à l'état initial c'est à dire un array vode
      setFilterResults([]);
    }
  }, [search]);

  useUpdateDocTitle(search);

  const handleChange = event => {
    setSearch(event.target.value);
  };

  const msgDisplay = (msg, color) => {
    return <p style={{ textAlign: 'center', color: color }}>{msg}</p>;
  };

  return (
    <>
      {isLoading ? (
        msgDisplay(
          'Veuillez patienter lors du rechargement de la data..',
          'red'
        )
      ) : (
        <Search searchString={search} searchPlaceholderString={handleChange} />
      )}

      {filterResults.length === 0 && search !== ''
        ? msgDisplay(
            "Il n'y a pas de résultats pour votre recherche...",
            'crimson'
          )
        : search === '' &&
          msgDisplay('Veuillez effectuer une recherche...', 'green')}
      <TableUsers users={filterResults} />
    </>
  );
}

export default MyContacts;
