import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import newsApi from '../../../api/newsApi';

function handleDeleteNews(e) {
  e.preventDefault();
  newsApi.deleteNewsById(e.target.value)
    .then(data => console.log(data))
}


const News = ({ title, date, id }) => {
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
        onClick={handleDeleteNews}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
}

export default News;
