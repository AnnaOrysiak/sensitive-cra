import React from 'react';

const AuthorsInputs = ({
  allAuthors,
  author,
  authors_message,
  errors,
  checkChange
}) => {
  const generateAuthors = () => {
    return allAuthors.map((item, index) =>
      item.login !== author ? (
        <label key={index} className="inputContainer">
          <input
            type="checkbox"
            name="authors"
            value={item.login}
            onChange={checkChange}
          />
          {item.login}
          <span className="checkmark"></span>
        </label>
      ) : (
        <label key={index} className="inputContainer">
          <input
            type="checkbox"
            id="authors"
            value={author}
            checked={true}
            readOnly
          />
          {author}
          <span className="checkmark"></span>
        </label>
      )
    );
  };

  return (
    <section className="form__options">
      <fieldset className="form__field">
        <legend>Autorzy</legend>
        {generateAuthors()}
        <br />
      </fieldset>

      {errors.authors && <span className="form__alert">{authors_message}</span>}
    </section>
  );
};

export default AuthorsInputs;
