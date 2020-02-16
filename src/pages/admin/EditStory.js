import React, { Component } from 'react';
import TextEditor from './components/Editor';
import AuthorsInputs from './components/AuthorsInputs';
import '../../style/forms.css';

class EditStory extends Component {
  state = {
    type: '',
    title: '',
    chapter_title: false,
    content: '',
    authors: [],
    errors: {
      type: false,
      authors: false,
      title: false,
      chapter_title: false,
      content: false
    },
    checked: {}
  };

  messages = {
    type_message: 'Wybierz typ',
    authors_message: 'Dodaj autorów',
    title_message: 'Nadaj tytuł',
    chapter_title_message: 'Uzupełnij to pole',
    content_message: 'Uzupełnij treść'
  };

  formValidate = () => {
    const type = this.state.type === '';
    const chapter_title =
      this.state.type === 'story' &&
      (this.state.chapter_title === false || this.state.chapter_title === '');
    const title = this.state.title === '';
    const content = this.state.content.length < 10;
    const authors = this.state.authors.length === 0;

    this.setState({
      errors: {
        type,
        title,
        chapter_title,
        content,
        authors
      }
    });

    return !(type && title && chapter_title && content && authors);
  };

  handleTypeChange = e => {
    e.preventDefault();
    this.formValidate();
    this.setState({ type: e.target.value });
  };

  handlerOnChange = e => {
    e.preventDefault();
    this.formValidate();

    const authors = Object.entries(this.state.checked)
      .filter(item => item[1] && item[0])
      .map(item => item[0]);

    if (e.target.type === 'checkbox') {
      this.setState({
        authors,
        checked: { ...this.state.checked, [e.target.value]: e.target.checked }
      });
    } else {
      this.setState({ authors, [e.target.name]: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.formValidate()) {
      console.log('aktualizuję dane');
    }
  };

  convertToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: false
      };
    }, initialValue);
  };

  componentDidMount() {
    const { type, title, chapter_title, content, authors } = this.props.content;
    const author = this.props.author;
    const checked = this.convertToObject(this.props.authors, 'login');

    this.setState({
      type,
      title,
      chapter_title,
      content,
      checked: { ...checked, [author]: true },
      authors
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.content !== prevProps.content) {
      this.setState(this.props.content);
    }
  }

  render() {
    const { type, title, chapter_title, content, errors } = this.state;
    const {
      type_message,
      title_message,
      chapter_title_message,
      content_message,
      authors_message
    } = this.messages;

    return (
      <div className="editContainer">
        <h3>Tryb edycji</h3>

        <form method="post" className="form editForm">
          <section className="form__options">
            <legend>Rodzaj</legend>
            <fieldset className="form__field">
              <input
                type="radio"
                id="story"
                name="type"
                value="story"
                checked={type === 'story'}
                onChange={this.handleTypeChange}
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
                onChange={this.handleTypeChange}
              />
              <label htmlFor="one-shot">one-shot</label>
            </fieldset>

            {errors.type && <span className="form__alert">{type_message}</span>}
          </section>

          <section className="form__options">
            <fieldset className="form__field">
              <legend>Autorzy</legend>
              <AuthorsInputs
                author={this.props.author}
                authors={this.props.authors}
                checkChange={this.handlerOnChange}
              />
              <br />
            </fieldset>

            {errors.authors && (
              <span className="form__alert">{authors_message}</span>
            )}
          </section>

          <section className="form__options">
            <div className="form__field">
              <input
                type="text"
                name="title"
                id="title"
                className={
                  title.length > 0 ? 'form__input filled' : 'form__input'
                }
                value={title}
                onChange={this.handlerOnChange}
                minLength="2"
                required
              />
              <label htmlFor="title" className="form__label">
                Tytuł
              </label>
            </div>

            {errors.title && (
              <span className="form__alert">{title_message}</span>
            )}
          </section>

          <section className="form__options">
            <div className="form__field">
              <input
                type="text"
                name="chapter_title"
                id="chapter_title"
                className={
                  chapter_title.length > 0
                    ? 'form__input filled'
                    : 'form__input'
                }
                value={chapter_title ? chapter_title : ''}
                onChange={this.handlerOnChange}
                disabled={type === 'one-shot'}
                minLength="1"
                required
              />
              <label htmlFor="chapter__title" className="form__label">
                Rozdział
              </label>
            </div>

            {errors.chapter_title && (
              <span className="form__alert">{chapter_title_message}</span>
            )}
          </section>

          <div className="form__editor">
            <TextEditor content={content} handleChange={this.handlerOnChange} />

            {errors.content && (
              <span className="form__alert">{content_message}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn form__button"
            onClick={this.handleSubmit}
          >
            Zatwierdź
          </button>
        </form>
      </div>
    );
  }
}

export default EditStory;
