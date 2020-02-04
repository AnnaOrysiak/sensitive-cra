import React from 'react';

const StoryElement = ({ id, title, chapter_title, visible }) => {
  return (
    <div className='storyListItem'>
      <button className='listBtn'>o</button>
      <p className='storyListItem__title'>{chapter_title ? chapter_title : title}</p>
      <p className='storyListItem__title small'>{chapter_title ? `(${title})` : '(one-shot)'}</p>
      <button className='listBtn'>Edytuj</button>
      <button className='listBtn'>x</button>
    </div>
  );
}

export default StoryElement;