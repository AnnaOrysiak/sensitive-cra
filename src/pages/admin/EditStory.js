import React, { Component } from 'react';
import '../../style/forms.css'


class EditStory extends Component {
  state = {
    type: "",
    title: "",
    chapter_title: false,
    content: "",


  }
  render() {
    return (
      <form method="post" className="form, myForm">
        <fieldset className="form__field">
          <input type="radio" id="story" value="story" />
          <label htmlFor="story">opowiadanie</label>
          <br />
          <input type="radio" id="one-shot" value="one-shot" />
          <label htmlFor="one-shot">one-shot</label>
        </fieldset>


        <div className="form__field">
          <input type="text" name="title" id="title" className="form__input" required />
          <label htmlFor="title" className="form__label">Tytuł</label>
        </div>
        <div className="form__field">
          <input type="text" name="chapter_title" id="chapter_title" className="form__input" />
          <label htmlFor="chapter__title" className="form__label">Rozdział</label>
        </div>
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
        <button className="btn form__button">Zatwierdź</button>
      </form>
    );
  }
}

export default EditStory;