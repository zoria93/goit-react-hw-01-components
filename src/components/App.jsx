import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import user from 'path/to/user.json';
import data from 'path/to/data.json';

export const App = () => {
  return (
    <div>
  <Profile
        username={user.username}  
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      
    </div>
  );
};
