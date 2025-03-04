import { useEffect, useState } from "react";
import UserCard from "../components/UserCard"
import axios from "axios";


function RegisteredUsers() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchUser = ()=>{
        axios.get('http://localhost:5500/api/allusers')
      .then((response) => {
        setUsers(response.data);
      }).catch((error) => {
        console.log(error.response.data)
      })
    }
    fetchUser();
  },[])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default RegisteredUsers;


