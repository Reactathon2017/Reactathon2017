import React from 'react'

const RestaurantProfile = ({bio}) => {
  return (
    <div>
      {bio.avatar_url && <img src={bio.avatar_url} className="img-circle img-responsive header-image"/>}
      {bio.name && <h2 >Name: {bio.name}</h2>}
    </div>
  )
}

RestaurantProfile.propTypes = {
  name: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default RestaurantProfile