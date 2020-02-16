import React from 'react';

const AuthorsInputs = ({ authors, author, checkChange }) => {
  const generateAuthors = () => {
    return authors.map((item, index) =>
      item.login !== author ? (
        <label key={index}>
          <input
            type="checkbox"
            name="authors"
            value={item.login}
            onChange={checkChange}
          />
          {item.login}
        </label>
      ) : (
        <label key={index}>
          <input
            type="checkbox"
            id="authors"
            value={author}
            checked={true}
            readOnly
          />
          {author}
        </label>
      )
    );
  };

  return generateAuthors();
};

export default AuthorsInputs;
