import React from 'react';

const StoryElement = ({ id, title, visible }) => {
  return (
    <div className='storyListItem'>
      <button className='btn'>o</button>
      <h4 className='storyListItem__title'>{title}</h4>
      <button>Edytuj</button>
      <button>Usuń</button>
    </div>
  );
}

export default StoryElement;