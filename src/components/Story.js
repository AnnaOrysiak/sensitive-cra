import React from 'react';
import parse from 'html-react-parser';
import '../style/story.css';

const Story = (props) => {
  const { type, title, chapter_title, content, authors } = props.story;

  return (
    <article className="story">
      <small>{type === "story" ? title + ' / ' + chapter_title : `${title} (${type})`}</small>
      <h3 className="story__title">{type === "story" ? chapter_title : title}</h3>
      <div className="story__content">{parse(content)}</div>
      <p className="story__authors">{authors}</p>

      {/* pagination here */}
      {type === "story" ? <p>"pagination"</p> : <p>"no-pagination"</p>}
      {/* end of pagination */}
    </article>

  );
}

export default Story;