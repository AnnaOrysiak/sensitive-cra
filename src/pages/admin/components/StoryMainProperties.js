import React from 'react';

const StoryMainProperties = ({
  type,
  title,
  chapter_title,
  title_message,
  chapter_title_message,
  errors,
  handlerOnChange
}) => {
  return (
    <>
      <section className="form__options">
        <div className="form__field">
          <input
            type="text"
            name="title"
            id="title"
            className={title.length > 0 ? 'form__input filled' : 'form__input'}
            value={title}
            onChange={handlerOnChange}
            minLength="2"
            required
          />
          <label htmlFor="title" className="form__label">
            Tytuł
          </label>
        </div>

        {errors.title && <span className="form__alert">{title_message}</span>}
      </section>

      <section className="form__options">
        <div className="form__field">
          <input
            type="text"
            name="chapter_title"
            id="chapter_title"
            className={
              chapter_title && chapter_title.length > 0
                ? 'form__input filled'
                : 'form__input'
            }
            value={type !== 'one-shot' && chapter_title}
            onChange={handlerOnChange}
            disabled={type === 'one-shot'}
            minLength="1"
            required
          />
          <label htmlFor="chapter__title" className="form__label">
            Rozdział
          </label>
        </div>

        {type !== 'one-shot' && errors.chapter_title && (
          <span className="form__alert">{chapter_title_message}</span>
        )}
      </section>
    </>
  );
};

export default StoryMainProperties;
