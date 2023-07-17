import React, { useEffect, useState } from "react";
function App() {
  const [myArray, setMyArray] = useState([]);

  useEffect(() => {
    FetchingTheData();
  }, []);

  const FetchingTheData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json(); // Add return statement here
      })
      .then((data) => {
        setMyArray(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      {myArray.map((userInformation, index) => {
        return (
          <div key={index}>
            <h1> {userInformation.name}</h1>
            <h3> User ID is : {userInformation.id}</h3>
            <ul>
              Adresses information : {userInformation.address.city}
              <li>{userInformation.address.street}</li>
              <li>{userInformation.address.suite}</li>
              <li>{userInformation.address.zipcode}</li>
            </ul>
            <b>
              {" "}
              <i> {userInformation.email}</i>
            </b>
            <p>
              {" "}
              <b>Company Information </b>
            </p>
            <b>name is : {userInformation.company.name}</b>
            <br /> <br />
            <b>{userInformation.company.catchPhrase}</b>
            <br /> <br />
            <b>{userInformation.company.bs}</b>
            <br /> <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
