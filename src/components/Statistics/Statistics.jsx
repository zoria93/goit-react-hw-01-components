import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Percentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(stat => (
          <Item
            key={stat.id}
            style={{
              backgroundColor: `#${Math.floor(
                Math.random() * 16777215
              ).toString(16)}`,
            }}
          >
            <span className="label">{stat.label}</span>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
