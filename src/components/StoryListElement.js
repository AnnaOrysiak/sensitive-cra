import React from 'react';

const StoryListElement = (props) => {
  const { storyId, chapterTitle, storyTitle, navigationHandler } = props;

  return (
    <li>
      <button className="menu__item" value={storyId} onClick={navigationHandler}>
        {chapterTitle} ({storyTitle})
      </button>
    </li>
  );
}

export default StoryListElement;