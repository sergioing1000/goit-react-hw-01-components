import propTypes from "prop-types"
import '../../CSS/frinensList.css'; 

function FriendList(props) {

  const { friendsData } = props;

  return (
    <div>
      <ul className="friend-list">
        {friendsData.map(item => (
          <li key={item.id} className="itemFL">
            <p className={`statusFL${item.isOnline ? 'Green' : 'Red'}`}></p>
            <img className="avatarFL" src={item.avatar} alt="User avatar" width="90"/>
            <p className="nameFL">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friendsData: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};


export default FriendList;
