import React from 'react';

const News = ({ title, date, id }) => {
  const utfDate = new Date(date);

  return (
    <div className='newsListItem'>
      <h4 className='newsListItem__title'>{title}</h4>
      <p>{utfDate.toLocaleDateString()}</p>
      <button>Edytuj</button>
      <button>Usuń</button>
    </div>
  );
}

export default News;
