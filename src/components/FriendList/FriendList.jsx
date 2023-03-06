import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  const elements = friends.map(friend => {
    return (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      />
    );
  });
  return <List>{elements}</List>;
};
