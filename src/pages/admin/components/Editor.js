import React, { Component } from 'react';
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
// import CustomOption from './CustomOption';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../style/editor.css';

class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({
      editorState
    });
  };

  uploadImageCallBack(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader(); // eslint-disable-line no-undef
      reader.onload = e => resolve({ data: { link: e.target.result } });
      reader.onerror = e => reject(e);
      reader.readAsDataURL(file);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      const blocksFromHTML = convertFromHTML(this.props.content);
      const state = ContentState.createFromBlockArray(
        blocksFromHTML.contentBlocks,
        blocksFromHTML.entityMap
      );
      this.setState({
        editorState: EditorState.createWithContent(state)
      });
    }
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="rdw-storybook-root">
        <Editor
          editorState={editorState}
          // defaultEditorState={editorState}
          toolbarClassName="rdw-storybook-toolbar"
          wrapperClassName="rdw-storybook-wrapper"
          editorClassName="rdw-storybook-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ['textAlign', 'blockType', 'inline', 'list', 'image'],
            textAlign: {
              inDropdown: false,
              options: ['left', 'center', 'right', 'justify']
            },
            blockType: {
              inDropdown: false,
              options: ['Normal', 'H5', 'H6']
            },
            inline: {
              options: [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'monospace'
              ]
            },
            list: {
              options: ['unordered', 'ordered']
            },
            image: {
              // className: undefined,
              // component: undefined,
              // popupClassName: undefined,
              // urlEnabled: true,
              // uploadEnabled: false,
              previewImage: true,
              // alignmentEnabled: true,
              uploadCallback: this.uploadImageCallBack
              // inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
              // alt: { present: true, mandatory: true }
              // defaultSize: {
              //   height: "auto",
              //   width: "50%"
              // },
              // title: undefined
            }
          }}
          // toolbarCustomButtons={[<CustomOption />]}
          placeholder="Pisz tutaj"
        />

        {/* <textarea
        readOnly
        className="rdw-storybook-textarea"
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))} /> */}

        <textarea
          readOnly
          className="rdw-storybook-textarea invisible"
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          onMouseLeave={this.props.handleChange}
          name="content"
        />
      </div>
    );
  }
}

export default TextEditor;
