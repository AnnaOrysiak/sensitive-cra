import React from 'react';

const Story = (props) => {

  console.log(props);
  return (
    <li className="list__item">
      {props.storyTitle}
    </li>
  );
}

export default Story;