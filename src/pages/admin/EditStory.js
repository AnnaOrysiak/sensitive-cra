import React, { Component } from 'react';
import TextEditor from './components/Editor';
import '../../style/forms.css'


class EditStory extends Component {
  state = {
    type: "",
    title: "",
    chapter_title: false,
    content: "",
    authors: ""

  }

  getAuthors = () => {
    // get users other than author
  }

  handleTypeChange = (e) => {
    // e.preventDefault();
    this.setState({ type: e.target.value })
  }

  handlerOnChange = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    this.setState(this.props.content);
  }

  componentDidUpdate(prevProps) {
    const basicState = {
      type: "",
      title: "",
      chapter_title: false,
      content: "",
      authors: ""
    }
    if (this.props.content !== prevProps.content) {
      this.setState({ ...basicState, ...this.props.content })
    }
  }


  render() {

    const { type, title, chapter_title, content, authors } = this.state;
    return (
      <div className="editContainer">
        <h3>Tryb edycji</h3>

        <form method="post" className="form editForm">

          <section className="form__options">
            <legend>Rodzaj</legend>
            <fieldset className="form__field">
              <input type="radio" id="story" name='type' value="story" checked={type === 'story'} onChange={this.handleTypeChange} />
              <label htmlFor="story">opowiadanie</label>
              <br />
              <input type="radio" id="one-shot" name='type' value="one-shot" checked={type === 'one-shot'} disabled={chapter_title} onChange={this.handleTypeChange} />
              <label htmlFor="one-shot">one-shot</label>
            </fieldset>
          </section>

          <section className="form__options">
            <fieldset className="form__field">
              <legend>Autorzy</legend>
              <input type="checkbox" id="authors" value={authors} />
              <label htmlFor="authors">{authors}</label>
              <br />

            </fieldset>
          </section>

          <section className="form__options">
            <div className="form__field">
              <input type="text" name="title" id="title" className={title.length > 0 ? "form__input filled" : "form__input"} value={title} onChange={this.handlerOnChange} minLength='2' required />
              <label htmlFor="title" className="form__label">Tytuł</label>
            </div>
          </section>

          <section className="form__options">
            <div className="form__field">
              <input type="text" name="chapter_title" id="chapter_title" className={chapter_title.length > 0 ? "form__input filled" : "form__input"} value={chapter_title ? chapter_title : ''} onChange={this.handlerOnChange} disabled={type === 'one-shot'} minLength='1' required />
              <label htmlFor="chapter__title" className="form__label">Rozdział</label>
            </div>
          </section>
          {/* 
          <textarea name="content" id="content" cols="30" rows="10" defaultValue={content} onChange={this.handlerOnChange} required></textarea> */}

          <TextEditor />

          <button className="btn form__button">Zatwierdź</button>
        </form>
      </div >
    );
  }
}

export default EditStory;