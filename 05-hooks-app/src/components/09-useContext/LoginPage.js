import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

  const { user, setuser } = useContext(UserContext);
  console.log(user);


  return (
    <>
      <h1>LoginPage</h1>
      <hr/>


      <pre>
        { JSON.stringify( user, null, 3)}
      </pre>

      <button 
        className='btn btn-primary'
        onClick={ () => setuser({
          id: 123,
          name: "Mariana Giraldo",
          email: "magavi.gilu@gmail.com"
      }) }
      > Add user</button>

    </>
  )
}
