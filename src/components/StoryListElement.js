import React from 'react';

const StoryListElement = (props) => {
  const { storyId, chapterTitle, storyTitle, getStoryHandler, navigationHandler } = props;

  const clickHandler = (e) => {
    getStoryHandler(e)
    setTimeout(navigationHandler, 500);
  }

  return (
    <li>
      <button className="menu__item" value={storyId} onClick={clickHandler}>
        {chapterTitle} ({storyTitle})
      </button>
    </li>
  );
}

export default StoryListElement;