import {
  Span,
  Item,
  FriendsName,
} from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Span isOnline={isOnline}>{isOnline}</Span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </Item>
  );
};
