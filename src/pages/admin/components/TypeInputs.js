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
        <label htmlFor="story" className="inputContainer">
          opowiadanie
          <input
            type="radio"
            id="story"
            name="type"
            value="story"
            checked={type === 'story'}
            onChange={handleTypeChange}
          />
          <span className="checkmark checkmark--radio"></span>
        </label>
        <label htmlFor="one-shot" className="inputContainer">
          one-shot
          <input
            type="radio"
            id="one-shot"
            name="type"
            value="one-shot"
            checked={type === 'one-shot'}
            disabled={chapter_title}
            onChange={handleTypeChange}
          />
          <span className="checkmark checkmark--radio"></span>
        </label>
      </fieldset>

      {errors.type && <span className="form__alert">{type_message}</span>}
    </section>
  );
};

export default TypeInputs;
