import React from 'react'

function SingleUser({user}) {
  return (
    <div className='matrix'>
      <img src={user.picture.large} alt='' />
      <div>
      <p>{user.name.first}</p>
      <p>{user.email}</p>
      <p>{user.location.country}</p>
      </div>
    </div>
  )
}

export default SingleUser