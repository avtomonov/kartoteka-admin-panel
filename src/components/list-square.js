import PropTypes from 'prop-types';
import { List } from '@mui/material';

export const ListSquare = (props) => {
  const { items, ...others } = props;

  return (
    <List
      className="list-square"
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="list-square__item"
        >
            <div
              className={"list-square__item__square indicator indicator--" + item.indicator}
            ></div>

            <div>
              <p className="list-square__item__title text-primary text-bold">{item.title}</p>
              {item.subtitles.map((subtitle, index) => (
                <p className="text-secondary list-square__item__subtitle" key={index}>{subtitle}</p>
              ))}
            </div>
        </li>
      ))}
    </List>
  );
};

ListSquare.propTypes = {
  items: PropTypes.array,
};
