import React from 'react';
import News from '../components/News';
import '../style/main.css';

const Main = (props) => {

  let newsList = [];
  const { content } = props;

  if (content) {
    newsList = content.map(item => <News key={item._id} title={item.title} date={item.date} description={item.description} />
    )
  }

  return (
    <>
      <main>
        {newsList}
      </main>
    </>
  );
}

export default Main;