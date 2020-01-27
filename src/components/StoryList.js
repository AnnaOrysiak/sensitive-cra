import React from 'react';
import { NavLink } from 'react-router-dom';

const StoryList = (props) => {

  const { stories, navigationHandler } = props;
  const storiesList = [];
  const shortStories = [];

  function getStoriesTitlesList() {
    const longStories = [];
    for (let i = 0; i < stories.length; i++) {
      if (i === 0 && stories[i].chapter_title) {
        longStories.push(stories[i].title)
      } else if (stories[i].title !== stories[i - 1].title && stories[i].chapter_title) longStories.push(stories[i].title)
      else if (stories[i].title !== stories[i - 1].title) {
        shortStories.push(stories[i].title)
      }
    }
    return longStories;
  }

  function filterTitle(title, storiesList) {
    const chapters = [];
    storiesList.filter((story) => {
      if (story.title === title) {
        chapters.push(
          <li key={story._id}>
            <NavLink to={`/sensitive-cra/story/${story._id}`} id={story._id} onClick={navigationHandler} className={story.chapter_title ? "storyBox__item" : "storyBox__item storyBox__item--short storyBox__title"}>{story.chapter_title ? story.chapter_title : story.title}</NavLink>
          </li>
        )
      }
      return story.title === title
    })
    return chapters;
  }


  getStoriesTitlesList().forEach((item, id) => {
    storiesList.push(
      <li key={item + id} className="storyBox storyBox--long">
        <h3 className="storyBox__title">{item}</h3>
        <ul className="storyBox__list">
          {filterTitle(item, stories)}
        </ul>
      </li>)
  })

  shortStories.forEach((item, id) => {
    storiesList.push(
      <li className="storyBox">
        <h3>
          {filterTitle(item, stories)}
        </h3>
      </li>)
  })


  return (
    <>
      <ul>
        {storiesList}
      </ul>
    </>
  );
}

export default StoryList;