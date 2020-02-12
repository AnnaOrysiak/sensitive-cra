import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (<div className="rdw-storybook-root">
      <Editor
        editorState={editorState}
        toolbarClassName="rdw-storybook-toolbar"
        wrapperClassName="rdw-storybook-wrapper"
        editorClassName="rdw-storybook-editor"
        onEditorStateChange={this.onEditorStateChange}
        toolbarOnFocus
        toolbar={{
          options: ['inline', 'blockType', 'list', 'fontSize', 'image'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
            bold: { className: 'bordered-option-classname' },
            italic: { className: 'bordered-option-classname' },
            underline: { className: 'bordered-option-classname' },
            strikethrough: { className: 'bordered-option-classname' },
            code: { className: 'bordered-option-classname' },
          },
          blockType: {
            className: 'bordered-option-classname',
          },
          list: {
            options: ["unordered", "ordered"]
          },
          fontSize: {
            className: 'bordered-option-classname',
          },
          image: {
            className: undefined,
            component: undefined,
            popupClassName: undefined,
            urlEnabled: true,
            uploadEnabled: true,
            previewImage: false,
            alignmentEnabled: true,
            uploadCallback: undefined,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            alt: { present: false, mandatory: false },
            defaultSize: {
              height: "auto",
              width: "auto"
            },
            title: undefined
          }
        }}
      />
      <textarea
        readOnly
        className="rdw-storybook-textarea"
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>);
  }
}

export default TextEditor;