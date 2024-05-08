import React from 'react';

const FetchData = () => {
  const fetchData = () => {
    // Pobierz dane z API
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        // Wyślij dane do Firebase
        fetch('https://shop-react-c0b01-default-rtdb.firebaseio.com/products.json', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            if (res.ok) {
              console.log('Dane zostały pomyślnie dodane do Firebase.');
            } else {
              console.error('Wystąpił błąd podczas wysyłania danych do Firebase.');
            }
          })
          .catch((error) => {
            console.error('Wystąpił błąd:', error);
          });
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas pobierania danych:', error);
      });
  };

  return (
    <div>
      <h1>FetchData</h1>
      <button onClick={fetchData}>Pobierz dane i dodaj do Firebase</button>
    </div>
  );
};

export default FetchData;
