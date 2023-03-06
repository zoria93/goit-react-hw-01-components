import PropTypes from 'prop-types';
import {
  Wrapper,
  Photo,
  Name,
  Tag,
  Location,
  List,
  Item,
  Quantity,
} from 'components/Profile/Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <div className="description">
        <Photo src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <List>
        <Item>
          <span className="label">Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <span className="label">Views</span>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </Wrapper>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
