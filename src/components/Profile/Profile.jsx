import propTypes from "prop-types"
import '../../CSS/profile.css'; 


function Profile(props) {
  
  const { userData } = props;

  const { username, tag, location, avatar, stats } = userData;

  return (
    <div className='componentProfile'>      
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" height="300" />
          <p className="name">{username}</p>        
          <p className="tag">Tag: @{tag}</p>
          <p className="location">Location: {location}</p>
        </div>        

        <ul className="profileStats">
          <li className="statsItem">
            <span className="labelP">Followers</span>
            <p className="quantity">{stats.followers}</p>
          </li>
          <li className="statsItem">
            <span className="labelP">Views</span>
            <p className="quantity">{stats.views}</p>
          </li>
          <li className="statsItem">
            <span className="labelP">Likes</span>
            <p className="quantity">{stats.likes}</p>
          </li>
        </ul>      
      </div>
    </div>
  );
}

Profile.propTypes = {
  userData: propTypes.shape({
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
      followers: propTypes.number.isRequired,
      views: propTypes.number.isRequired,
      likes: propTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};



export default Profile;