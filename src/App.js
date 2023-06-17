import { useEffect, useState } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setPage] = useState(false)
  useEffect(() => {
    setPage(true)

   

    fetch("https://jsonplaceholder.typicode.com/users")

      .then(response => response.json())
      .then(json => setUsers(json))
        setPage(false)
    
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>Users...</div>
      ) : (
        <>
          <h1>Random Users</h1>
          <table border={8} table width={50} tablcolor="black">
            <tr>
              
              <h2>Name</h2>
              <th>Email</th>
              <th>Phone</th>
              <th>Street</th>
              <th>Serial Number</th>
            </tr>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.street}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
};

export default App
