import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import storyApi from '../../../api/storyApi';

// function handleDeleteStory(e) {
//   e.preventDefault();
//   console.log(e.target.value);
//   storyApi.deleteStoryById(e.target.value)
//     .then(data => console.log(data))
// }

const StoryElement = ({ id, title, chapter_title, visible, handleDeleteStory }) => {
  return (
    <div className='storyListItem'>
      <button className='listBtn'>
        <FontAwesomeIcon icon={visible ? 'eye' : 'eye-slash'} />
      </button>
      <p className='storyListItem__title'>{chapter_title ? chapter_title : title}</p>
      <p className='storyListItem__title small'>{chapter_title ? `(${title})` : '(one-shot)'}</p>
      <button className='listBtn'>
        <FontAwesomeIcon icon="edit" />
      </button>
      <button
        className='listBtn'
        value={id}
        onClick={() => handleDeleteStory(id)}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
}

export default StoryElement;