import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
import '../style/story.css';

const Story = props => {
  const { type, title, chapter_title, content, authors } = props.story;

  const storyAuthors = authors.map((author, index) => (
    <span className="story__author" key={index}>
      {author}
    </span>
  ));

  const purifiedContent = DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      'p',
      // 'b',
      'strong',
      'em',
      'u',
      'del',
      'code',
      'ul',
      'ol',
      'li',
      'h5',
      'h6'
    ],
    ALLOWED_ATTR: ['style']
  });
  console.log(DOMPurify);

  return (
    <article className="story">
      <small>
        {type === 'story'
          ? title + ' / ' + chapter_title
          : `${title} (${type})`}
      </small>
      <h3 className="story__title">
        {type === 'story' ? chapter_title : title}
      </h3>
      <div className="story__content">{parse(purifiedContent)}</div>
      <p className="story__authors">{storyAuthors}</p>
    </article>
  );
};

export default Story;
