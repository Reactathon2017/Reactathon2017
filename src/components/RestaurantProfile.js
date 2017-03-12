import React from 'react';
import Rater from 'react-rater';

const RestaurantProfile = ({bio}) => {
  return (
    <div>
      {bio.avatar_url && <img src={bio.avatar_url} className="img-circle img-responsive header-image"/>}
      {bio.name && <h2 >{bio.name}</h2>}
      <Rater total={5} rating={4} interactive={false} />
    </div>
  )
}

RestaurantProfile.propTypes = {
  bio: React.PropTypes.object.isRequired
}

export default RestaurantProfile