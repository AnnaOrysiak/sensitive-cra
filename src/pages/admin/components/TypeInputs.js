import React from 'react';

const TypeInputs = ({
  type,
  chapter_title,
  type_message,
  errors,
  handleTypeChange
}) => {
  return (
    <section className="form__options">
      <legend>Rodzaj</legend>
      <fieldset className="form__field">
        <input
          type="radio"
          id="story"
          name="type"
          value="story"
          checked={type === 'story'}
          onChange={handleTypeChange}
        />
        <label htmlFor="story">opowiadanie</label>
        <br />
        <input
          type="radio"
          id="one-shot"
          name="type"
          value="one-shot"
          checked={type === 'one-shot'}
          disabled={chapter_title}
          onChange={handleTypeChange}
        />
        <label htmlFor="one-shot">one-shot</label>
      </fieldset>

      {errors.type && <span className="form__alert">{type_message}</span>}
    </section>
  );
};

export default TypeInputs;
