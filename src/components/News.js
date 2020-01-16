import React from 'react';

const News = (props) => {

  const { title, description, date } = props;
  const utfDate = new Date(date);

  return (
    <article className="articleNews">
      <h3>{title}</h3>
      <span>{utfDate.toLocaleDateString()}</span>
      <p className="articleNews__description">{description}</p>
    </article>

  );
}

export default News;