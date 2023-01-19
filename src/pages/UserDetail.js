import {useState, useEffect} from 'react'
import { useParams, useLocation } from 'react-router-dom'

function UserDetail() {
  const location = useLocation();
  const params = useParams()
  const [user, setUser]= useState(location.state)
  
  useEffect(() => {
    if(!user?.id){
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }
   
  },[params])
  return (
    <div>
      <h2>Kullanıcı Detay</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default UserDetail
