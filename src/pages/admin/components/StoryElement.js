import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditButton from './EditButton';

const StoryElement = ({
  story,
  handleDeleteStory,
  handleUpdateStory,
  handleEditStory
}) => {
  const { _id, title, chapter_title, visible } = story;

  return (
    <div className="storyListItem">
      <button
        className="listBtn"
        value={visible}
        onClick={() => handleUpdateStory(_id, { visible: !visible })}
      >
        <FontAwesomeIcon icon={visible ? 'eye' : 'eye-slash'} />
      </button>
      <p className="storyListItem__title">
        {chapter_title ? chapter_title : title}
      </p>
      <p className="storyListItem__title small">
        {chapter_title ? `(${title})` : '(one-shot)'}
      </p>
      {/* <button className="listBtn" onClick={() => {handleEditStory(story);
      scrollToTop()}}>
        <FontAwesomeIcon icon="edit" />
      </button> */}
      <EditButton id={_id} handleEditStory={() => handleEditStory(story)} />
      <button
        className="listBtn"
        value={_id}
        onClick={() => handleDeleteStory(_id)}
      >
        <FontAwesomeIcon icon="trash" />
      </button>
    </div>
  );
};

export default StoryElement;
