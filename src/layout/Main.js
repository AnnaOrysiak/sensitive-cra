import React from 'react';
import News from '../components/News';
import Story from '../components/Story';
import Loader from '../components/Loader';
import '../style/main.css';

const Main = (props) => {

  let mainContent = [];
  const { storyContent, content } = props;

  if (content) {
    if (storyContent) {
      mainContent = content.map(item => <Story key={item._id} story={item} />)
    } else {
      mainContent = content.map(item => <News key={item._id} title={item.title} date={item.date} description={item.description} />
      )
    }
  }

  return (
    <>
      <main className="mainContainer">
        {content.length ? mainContent : <Loader />}
      </main>
    </>
  );
}

export default Main;