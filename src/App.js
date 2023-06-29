import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import ToDo from "./components/ToDo/ToDo";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import UserInfo from "./components/Users/UserInfo";
import UsersContext from "./contexts/UsersContext";
import { useEffect, useState } from "react";
import ThemeProvider from "./providers/ThemeProvider";
import Counters from "./components/Counters/Counters";

function App() {

  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setUsers(result);
  }
  useEffect(() => {
    getUsers();
  }, []);


  return (
    <>
      <UsersContext.Provider value={users}>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/users" element={<Users />}>
              <Route path=":id" element={<UserInfo />} />
            </Route>

            <Route path="/counters" element={<Counters />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </ThemeProvider>
      </UsersContext.Provider>

    </>
  );
}

export default App;
