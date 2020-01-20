import React from 'react';
import parse from 'html-react-parser';
import '../style/story.css';

const Story = (props) => {

  console.log(props);

  const { type, title, chapter, content, authors } = props.story;

  return (
    <article className="story">
      <small>{title} / {chapter} </small>
      <h3 className="story__title">{chapter}</h3>
      <div className="story__content">{parse(content)}</div>
      <p className="story__authors">{authors}</p>

      {/* pagination here */}
      {type === "story" ? <p>"pagination"</p> : <p>"no-pagination"</p>}
      {/* end of pagination */}
    </article>

  );
}

export default Story;