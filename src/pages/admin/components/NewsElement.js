import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NewsElement = ({ title, date, id, handleDeleteNews }) => {
  const utfDate = new Date(date);

  return (
    <div className='newsListItem'>
      <div className='newsListItem__title'>
        <h4>{title}</h4>
        <p className='small'>{utfDate.toLocaleDateString()}</p>
      </div>
      <button className='listBtn'>
        <FontAwesomeIcon icon="edit" />
      </button>
      <button
        className='listBtn'
        value={id}
        onClick={() => handleDeleteNews(id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
}

export default NewsElement;
