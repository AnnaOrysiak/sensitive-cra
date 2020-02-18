import React, { Component } from 'react';
import TextEditor from './components/Editor';
import TypeInputs from './components/TypeInputs';
import StoryMainProperties from './components/StoryMainProperties';
import AuthorsInputs from './components/AuthorsInputs';
import storyApi from '../../api/storyApi';
import '../../style/forms.css';

class EditStory extends Component {
  state = {
    _id: '',
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

    return !type && !title && !chapter_title && !content && !authors;
  };

  handleTypeChange = e => {
    this.formValidate();
    this.setState({ type: e.target.value });
  };

  handlerOnChange = e => {
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
    const { _id, type, title, chapter_title, content, authors } = this.state;
    if (this.formValidate()) {
      console.log('aktualizuję dane');
      let data;

      if (type !== 'one-shot') {
        data = { type, title, chapter_title, content, authors };
      } else {
        data = { type, title, content, authors };
      }
      console.log(data);
      _id !== 'new'
        ? storyApi.updateStoryById(_id, data)
        : storyApi.createNewStory(data).then(data => console.log(data));
    } else {
      alert('Uzupełnij brakujące pola!');
    }
  };

  convertToObject = (array, value) => {
    return array
      .map(item => ({ [item]: value }))
      .reduce(function(result, item) {
        const key = Object.keys(item)[0];
        result[key] = item[key];
        return result;
      }, {});
  };

  componentDidMount() {
    const {
      _id,
      type,
      title,
      chapter_title,
      content,
      authors
    } = this.props.editContent;

    const checked = this.convertToObject(authors, true);

    this.setState({
      _id,
      type,
      title,
      chapter_title,
      content,
      checked,
      authors
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.editContent !== prevProps.editContent) {
      const checked = this.convertToObject(
        this.props.editContent.authors,
        true
      );

      this.setState({ ...this.props.editContent, checked });
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
        <button onClick={this.props.closeEditStory}>zamknij</button>
        <form method="post" className="form editForm">
          <TypeInputs
            type={type}
            chapter_title={chapter_title}
            type_message={type_message}
            errors={errors}
            handleTypeChange={this.handleTypeChange}
          />

          <AuthorsInputs
            author={this.props.author}
            allAuthors={this.props.allAuthors}
            authors_message={authors_message}
            errors={errors}
            checkChange={this.handlerOnChange}
          />

          <StoryMainProperties
            type={type}
            title={title}
            chapter_title={chapter_title || ''}
            title_message={title_message}
            chapter_title_message={chapter_title_message}
            errors={errors}
            handlerOnChange={this.handlerOnChange}
          />

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
