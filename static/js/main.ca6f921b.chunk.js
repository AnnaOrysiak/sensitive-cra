(this["webpackJsonpsensitive-cra"]=this["webpackJsonpsensitive-cra"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/bensound-cute.0466433c.mp3"},114:function(e,t,a){e.exports=a(241)},119:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},126:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},142:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),s=a.n(o),i=(a(119),a(1)),l=a(2),c=a(7),u=a(6),m=a(8),h=a(20),d=a(40),p=a(14),f=(a(122),function(e){var t=e.size,a=void 0===t?"":t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"logoContainer ".concat(a)},r.a.createElement("div",{className:"circle"},r.a.createElement("div",{className:"feather"}),r.a.createElement("div",{className:"scape"}))))}),y=(a(123),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(f,{size:"medium"}),r.a.createElement("h1",{className:"header__title"},"Sensitive")))}),v=a(11),E=(a(126),function(){return r.a.createElement("div",{className:"loading-circle"})}),g=function(e){var t=e.stories,a=e.navigationHandler,n=[],o=[];function s(e,t){var n=[];return t.filter((function(t){return t.title===e&&n.push(r.a.createElement("li",{key:t._id},r.a.createElement(h.b,{to:"/sensitive-cra/story/".concat(t._id),id:t._id,onClick:a,className:t.chapter_title?"storyBox__item":"storyBox__item storyBox__item--short storyBox__title"},t.chapter_title?t.chapter_title:t.title))),t.title===e})),n}return function(){for(var e=[],a=0;a<t.length;a++)0===a&&t[a].chapter_title?e.push(t[a].title):t[a].title!==t[a-1].title&&t[a].chapter_title?e.push(t[a].title):t[a].title!==t[a-1].title&&o.push(t[a].title);return e}().forEach((function(e,a){n.push(r.a.createElement("li",{key:e+a,className:"storyBox storyBox--long"},r.a.createElement("h3",{className:"storyBox__title"},e),r.a.createElement("ul",{className:"storyBox__list"},s(e,t))))})),o.forEach((function(e,a){n.push(r.a.createElement("li",{className:"storyBox",key:e+a},r.a.createElement("h3",null,s(e,t))))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,n))},b={baseUrl:"https://sensitive-express.herokuapp.com/api/",baseCorsUrl:"https://cors-anywhere.herokuapp.com/https://sensitive-express.herokuapp.com/api/",adminUrl:"https://sensitive-express.herokuapp.com/api/admin/",adminCorsUrl:"https://cors-anywhere.herokuapp.com/https://sensitive-express.herokuapp.com/api/admin/",desktopSize:1024},_=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getAllStories",value:function(){return fetch("".concat(b.baseCorsUrl,"stories")).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"getStoryById",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(b.baseCorsUrl,"story/").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"getStoriesByAuthor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(b.adminCorsUrl,"stories/").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"createNewStory",value:function(e){return console.log(e),fetch("".concat(b.adminCorsUrl,"story/add"),{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"deleteStoryById",value:function(e){return fetch("".concat(b.adminCorsUrl,"story/delete/").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"updateStoryById",value:function(e,t){return fetch("".concat(b.adminCorsUrl,"story/update/").concat(e),{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}}]),e}(),N=(a(129),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1,stories:[]},a.navigationHandler=function(){a.setState((function(e){return{active:!e.active}}))},a.checkPermission=function(){return localStorage.getItem("state")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.getAllStories().then((function(t){return e.setState({stories:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.state.active?"menu active":"menu"},r.a.createElement("section",{className:"icons"},r.a.createElement(h.b,{to:"/sensitive-cra/",onClick:this.navigationHandler,className:"btn",exact:!0},r.a.createElement(v.a,{icon:"home",size:"2x"}),r.a.createElement("span",{className:"description"},"Start")),r.a.createElement(h.b,{to:"/sensitive-cra/admin",onClick:this.navigationHandler,className:"btn"},r.a.createElement(v.a,{icon:"user",size:"2x"}),r.a.createElement("span",{className:"description"},"Panel u\u017cytkownika")),window.innerWidth>b.desktopSize&&this.checkPermission()&&r.a.createElement(h.b,{to:"/sensitive-cra/logout",onClick:this.navigationHandler,className:"btn"},r.a.createElement(v.a,{icon:"power-off",size:"2x"}),r.a.createElement("span",{className:"description"},"Wyloguj")),r.a.createElement("button",{className:"btn",onClick:this.props.changeColor},r.a.createElement(v.a,{icon:this.props.lightMode?"moon":"sun",size:"2x"}),r.a.createElement("span",{className:"description"},"Motyw ",this.props.lightMode?"ciemny":"jasny"))),r.a.createElement("h3",{className:"menu__header"},"Opowiadania"),this.state.stories.length?r.a.createElement(g,{stories:this.state.stories,navigationHandler:this.navigationHandler}):r.a.createElement(E,null)),r.a.createElement("div",{className:this.state.active?"btn menu-button active":"btn menu-button",onClick:this.navigationHandler},r.a.createElement(v.a,{icon:"chevron-right",size:"2x"})))}}]),t}(n.Component)),k=a(27),w=function(e){var t=e.title,a=e.description,n=e.date,o=new Date(n);return r.a.createElement("article",{className:"articleNews"},r.a.createElement("h3",null,t),r.a.createElement("span",null,o.toLocaleDateString()),r.a.createElement("p",{className:"articleNews__description"},a))},j=localStorage.getItem("state")?b.adminCorsUrl:b.baseCorsUrl,S=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getAllNews",value:function(){return fetch("".concat(j,"news")).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}},{key:"deleteNewsById",value:function(e){return fetch("".concat(j,"news/delete/").concat(e)).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}}]),e}(),O=(a(130),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={news:[]},a.generateNews=function(){return a.state.news.map((function(e){return r.a.createElement(w,{key:e._id,title:e.title,date:e.date,description:e.description})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.getAllNews().then((function(t){return e.setState({news:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.news.length?this.generateNews():r.a.createElement(E,null))}}]),t}(n.Component)),C=a(108),A=a.n(C),B=(a(142),function(e){var t=e.story,a=t.type,n=t.title,o=t.chapter_title,s=t.content,i=t.authors.map((function(e,t){return r.a.createElement("span",{className:"story__author",key:t},e)}));return r.a.createElement("article",{className:"story"},r.a.createElement("small",null,"story"===a?n+" / "+o:"".concat(n," (").concat(a,")")),r.a.createElement("h3",{className:"story__title"},"story"===a?o:n),r.a.createElement("div",{className:"story__content"},A()(s)),r.a.createElement("p",{className:"story__authors"},i))}),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={story:[]},a.fetchNewStory=function(){var e=a.props.match.params.id;_.getStoryById(e).then((function(e){return a.setState({story:e})}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.fetchNewStory()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.id!==e.match.params.id&&this.fetchNewStory()}},{key:"render",value:function(){var e=this.state.story;return r.a.createElement(r.a.Fragment,null,e._id?r.a.createElement(B,{story:e}):r.a.createElement(E,null))}}]),t}(n.Component),I=a(113),F=a(41),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={intervalId:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-50)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this));this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{className:"listBtn",onClick:function(){e.props.handleEditStory(),e.scrollToTop()}},r.a.createElement(v.a,{icon:"new"!==this.props.id?"edit":"plus"}))}}]),t}(n.Component),U=function(e){var t=e.story,a=e.handleDeleteStory,n=e.handleUpdateStory,o=e.handleEditStory,s=t._id,i=t.title,l=t.chapter_title,c=t.visible;return r.a.createElement("div",{className:"storyListItem"},r.a.createElement("button",{className:"listBtn",value:c,onClick:function(){return n(s,{visible:!c})}},r.a.createElement(v.a,{icon:c?"eye":"eye-slash"})),r.a.createElement("p",{className:"storyListItem__title"},l||i),r.a.createElement("p",{className:"storyListItem__title small"},l?"(".concat(i,")"):"(one-shot)"),r.a.createElement(D,{id:s,handleEditStory:function(){return o(t)}}),r.a.createElement("button",{className:"listBtn",value:s,onClick:function(){return a(s)}},r.a.createElement(v.a,{icon:"trash"})))},z=a(25),M=a(34),T=a(109),L=a.n(T),H=a(110),P=(a(234),a(235),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editorState:M.EditorState.createEmpty()},a.onEditorStateChange=function(e){a.setState({editorState:e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"uploadImageCallBack",value:function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(e){return t({data:{link:e.target.result}})},n.onerror=function(e){return a(e)},n.readAsDataURL(e)}))}},{key:"componentDidUpdate",value:function(e){if(e.content!==this.props.content){var t=Object(M.convertFromHTML)(this.props.content),a=M.ContentState.createFromBlockArray(t.contentBlocks,t.entityMap);this.setState({editorState:M.EditorState.createWithContent(a)})}}},{key:"render",value:function(){var e=this.state.editorState;return r.a.createElement("div",{className:"rdw-storybook-root"},r.a.createElement(H.Editor,{editorState:e,toolbarClassName:"rdw-storybook-toolbar",wrapperClassName:"rdw-storybook-wrapper",editorClassName:"rdw-storybook-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{options:["textAlign","blockType","inline","list"],textAlign:{inDropdown:!1,options:["left","center","right","justify"]},blockType:{inDropdown:!1,options:["Normal","H5","H6"]},inline:{options:["bold","italic","underline","strikethrough","monospace"]},list:{options:["unordered","ordered"]}},placeholder:"Pisz tutaj"}),r.a.createElement("textarea",{readOnly:!0,className:"rdw-storybook-textarea invisible",value:L()(Object(M.convertToRaw)(e.getCurrentContent())),onMouseLeave:this.props.handleChange,name:"content"}))}}]),t}(n.Component)),W=function(e){var t=e.type,a=e.chapter_title,n=e.type_message,o=e.errors,s=e.handleTypeChange;return r.a.createElement("section",{className:"form__options"},r.a.createElement("legend",null,"Rodzaj"),r.a.createElement("fieldset",{className:"form__field"},r.a.createElement("label",{htmlFor:"story",className:"inputContainer"},"opowiadanie",r.a.createElement("input",{type:"radio",id:"story",name:"type",value:"story",checked:"story"===t,onChange:s}),r.a.createElement("span",{className:"checkmark checkmark--radio"})),r.a.createElement("label",{htmlFor:"one-shot",className:"inputContainer"},"one-shot",r.a.createElement("input",{type:"radio",id:"one-shot",name:"type",value:"one-shot",checked:"one-shot"===t,disabled:a,onChange:s}),r.a.createElement("span",{className:"checkmark checkmark--radio"}))),o.type&&r.a.createElement("span",{className:"form__alert"},n))},V=function(e){var t=e.type,a=e.title,n=e.chapter_title,o=e.title_message,s=e.chapter_title_message,i=e.errors,l=e.handlerOnChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"form__options"},r.a.createElement("div",{className:"form__field"},r.a.createElement("input",{type:"text",name:"title",id:"title",className:a.length>0?"form__input filled":"form__input",value:a,onChange:l,minLength:"2",required:!0}),r.a.createElement("label",{htmlFor:"title",className:"form__label"},"Tytu\u0142")),i.title&&r.a.createElement("span",{className:"form__alert"},o)),r.a.createElement("section",{className:"form__options"},r.a.createElement("div",{className:"form__field"},r.a.createElement("input",{type:"text",name:"chapter_title",id:"chapter_title",className:n&&n.length>0?"form__input filled":"form__input",value:"one-shot"!==t&&n,onChange:l,disabled:"one-shot"===t,minLength:"1",required:!0}),r.a.createElement("label",{htmlFor:"chapter__title",className:"form__label"},"Rozdzia\u0142")),"one-shot"!==t&&i.chapter_title&&r.a.createElement("span",{className:"form__alert"},s)))},Y=function(e){var t=e.allAuthors,a=e.author,n=e.authors_message,o=e.errors,s=e.checkChange,i=e.authors;return r.a.createElement("section",{className:"form__options"},r.a.createElement("fieldset",{className:"form__field"},r.a.createElement("legend",null,"Autorzy"),t.map((function(e,t){return e.login!==a?r.a.createElement("label",{key:t,className:"inputContainer"},r.a.createElement("input",{type:"checkbox",name:"authors",value:e.login,checked:i.includes(e.login),onChange:s}),e.login,r.a.createElement("span",{className:"checkmark"})):r.a.createElement("label",{key:t,className:"inputContainer"},r.a.createElement("input",{type:"checkbox",id:"authors",defaultChecked:!0,readOnly:!0}),a,r.a.createElement("span",{className:"checkmark"}))})),r.a.createElement("br",null)),o.authors&&r.a.createElement("span",{className:"form__alert"},n))},R=(a(62),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={_id:"",type:"",title:"",chapter_title:!1,content:"",authors:[],errors:{type:!1,authors:!1,title:!1,chapter_title:!1,content:!1},checked:{}},a.messages={type_message:"Wybierz typ",authors_message:"Dodaj autor\xf3w",title_message:"Nadaj tytu\u0142",chapter_title_message:"Uzupe\u0142nij to pole",content_message:"Uzupe\u0142nij tre\u015b\u0107"},a.formValidate=function(){var e=""===a.state.type,t="story"===a.state.type&&(!1===a.state.chapter_title||""===a.state.chapter_title),n=""===a.state.title,r=a.state.content.length<10,o=0===a.state.authors.length;return a.setState({errors:{type:e,title:n,chapter_title:t,content:r,authors:o}}),!e&&!n&&!t&&!r&&!o},a.handleTypeChange=function(e){a.formValidate(),a.setState({type:e.target.value})},a.handlerOnChange=function(e){if(a.formValidate(),"checkbox"===e.target.type){var t,n=Object.entries(a.state.checked).filter((function(e){return e[1]&&e[0]})).map((function(e){return e[0]}));a.setState({authors:n,checked:Object(F.a)({},a.state.checked,(t={},Object(z.a)(t,e.target.value,e.target.checked),Object(z.a)(t,a.props.author,!0),t))})}else a.setState(Object(z.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t,n=a.state,r=n._id,o=n.type,s=n.title,i=n.chapter_title,l=n.content,c=n.authors;a.formValidate()?(console.log("aktualizuj\u0119 dane"),t="one-shot"!==o?{type:o,title:s,chapter_title:i,content:l,authors:c}:{type:o,title:s,content:l,authors:c},console.log(t),"new"!==r?_.updateStoryById(r,t).then((function(e){return alert(e.respond)})):_.createNewStory(t).then((function(e){return alert(e.respond)}))):alert("Uzupe\u0142nij brakuj\u0105ce pola!")},a.convertToObject=function(e,t){return e.map((function(e){return Object(z.a)({},e,t)})).reduce((function(e,t){var a=Object.keys(t)[0];return e[a]=t[a],e}),{})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.editContent,t=e._id,a=e.type,n=e.title,r=e.chapter_title,o=e.content,s=e.authors,i=s.length?this.convertToObject(s,!0):{};this.setState({_id:t,type:a,title:n,chapter_title:r,content:o,checked:i,authors:s})}},{key:"componentDidUpdate",value:function(e){if(this.props.editContent!==e.editContent){var t=this.convertToObject(this.props.editContent.authors,!0);this.setState(Object(F.a)({},this.props.editContent,{checked:t}))}}},{key:"render",value:function(){var e=this.state,t=e.type,a=e.title,n=e.chapter_title,o=e.content,s=e.errors,i=this.messages,l=i.type_message,c=i.title_message,u=i.chapter_title_message,m=i.content_message,h=i.authors_message;return r.a.createElement("div",{className:"editContainer"},r.a.createElement("h3",null,"Tryb edycji"),r.a.createElement("button",{className:"btn listBtn listBtn--main",onClick:this.props.closeEditStory},r.a.createElement(v.a,{icon:"times",size:"2x"}),r.a.createElement("span",{className:"description"},"Zamknij")),r.a.createElement("form",{method:"post",className:"form editForm"},r.a.createElement(W,{type:t,chapter_title:n,type_message:l,errors:s,handleTypeChange:this.handleTypeChange}),r.a.createElement(Y,{author:this.props.author,allAuthors:this.props.allAuthors,authors_message:h,errors:s,checkChange:this.handlerOnChange,authors:this.state.authors}),r.a.createElement(V,{type:t,title:a,chapter_title:n||"",title_message:c,chapter_title_message:u,errors:s,handlerOnChange:this.handlerOnChange}),r.a.createElement("div",{className:"form__editor"},r.a.createElement(P,{content:o,handleChange:this.handlerOnChange}),s.content&&r.a.createElement("span",{className:"form__alert"},m)),r.a.createElement("button",{type:"submit",className:"btn form__button",onClick:this.handleSubmit},"Zatwierd\u017a")))}}]),t}(n.Component)),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={stories:[],editmode:!1,edit_content:{},authors:[]},a.storyModel={_id:"new",type:"",title:"",chapter_title:!1,content:"",authors:a.state.authors},a.generateStoriesList=function(){return a.state.stories.map((function(e){return r.a.createElement(U,{key:e._id,story:e,handleDeleteStory:a.handleDeleteStory,handleUpdateStory:a.handleUpdateStory,handleEditStory:function(){return a.handleEditStory(e)}})}))},a.getStoriesByAuthor=function(e){_.getStoriesByAuthor(e).then((function(e){return a.setState({stories:e})}))},a.deleteStoryFromState=function(e){a.setState((function(t){return{stories:t.stories.filter((function(t){return t._id!==e&&t}))}}))},a.updateStoryFromState=function(e){a.setState((function(t){return{stories:t.stories.map((function(t){return t._id===e?Object(F.a)({},t,{visible:!t.visible}):t}))}}))},a.handleDeleteStory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.deleteStoryFromState(e),_.deleteStoryById(e)},a.handleUpdateStory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.updateStoryFromState(e),_.updateStoryById(e,t)},a.handleEditStory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.setState({editmode:!0,edit_content:e})},a.closeEditStory=function(){a.setState({editmode:!1,editContent:a.storyModel})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getStoriesByAuthor(this.props.author)}},{key:"componentDidUpdate",value:function(e,t){e.author!==this.props.author&&(this.getStoriesByAuthor(this.props.author),this.setState({authors:[].concat(Object(I.a)(this.state.authors),[this.props.author])}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminStories"},this.state.editmode&&r.a.createElement(R,{author:this.props.author,allAuthors:this.props.allAuthors,editContent:""!==this.state.edit_content?this.state.edit_content:"",closeEditStory:this.closeEditStory}),r.a.createElement("h3",null,"Twoja tw\xf3rczo\u015b\u0107"),this.state.stories.length>0?this.generateStoriesList():r.a.createElement(E,null),r.a.createElement("div",{className:"addListItem"},r.a.createElement(D,{id:this.storyModel._id,handleEditStory:function(){return e.handleEditStory(e.storyModel)}}),r.a.createElement("p",{className:"storyListItem__title"},"Nowy tytu\u0142"))))}}]),t}(n.Component),Z=function(e){var t=e.title,a=e.date,n=e.id,o=e.handleDeleteNews,s=new Date(a);return r.a.createElement("div",{className:"newsListItem"},r.a.createElement("div",{className:"newsListItem__title"},r.a.createElement("h4",null,t),r.a.createElement("p",{className:"small"},s.toLocaleDateString())),r.a.createElement("button",{className:"listBtn"},r.a.createElement(v.a,{icon:"edit"})),r.a.createElement("button",{className:"listBtn",value:n,onClick:function(){return o(n)}},r.a.createElement(v.a,{icon:"trash"})))},q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={news:[]},a.generateNewsList=function(){return a.state.news.map((function(e){return r.a.createElement(Z,{key:e.date,title:e.title,date:e.date,id:e._id,handleDeleteNews:a.handleDeleteNews})}))},a.deleteNewsFromState=function(e){a.setState((function(t){return{news:t.news.filter((function(t){return t._id!==e&&t}))}}))},a.handleDeleteNews=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";a.deleteNewsFromState(e),S.deleteNewsById(e)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;S.getAllNews().then((function(t){return e.setState({news:t})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminNews"},r.a.createElement("h3",null,"News"),this.state.news.length>0?this.generateNewsList():r.a.createElement(E,null)))}}]),t}(n.Component),K=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getAllUsers",value:function(){return fetch("".concat(b.adminCorsUrl,"users")).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).catch((function(e){return e}))}}]),e}(),$=(a(236),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,allAuthors:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;K.getAllUsers().then((function(t){if(t)return e.setState({allAuthors:t.map((function(e){return{login:e.login}})),user:e.props.user})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"adminPanel"},r.a.createElement("h3",{className:"adminName"},this.state.user),r.a.createElement(J,{author:this.state.user,allAuthors:this.state.allAuthors}),r.a.createElement(q,null)))}}]),t}(n.Component)),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:""},a.checkPermission=function(){return localStorage.getItem("state")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({user:localStorage.getItem("user")})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.b,{render:function(){return e.checkPermission()?r.a.createElement($,{user:e.state.user}):r.a.createElement(k.a,{to:"/sensitive-cra/login/"})}}))}}]),t}(n.Component),Q=a(112),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={login:"",pass:"",errors:{login:!1,pass:!1}},a.messages={login_incorrect:"Nazwa musi by\u0107 d\u0142u\u017csza ni\u017c 4 znaki i nie mo\u017ce zawiera\u0107 spacji",email_incorrect:"Brak @ w emailu",password_incorrect:"Has\u0142o musi mie\u0107 od 8 do 20 znak\xf3w"},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(z.a)({},t,n))},a.handleSubmit=function(e){e.preventDefault();var t=a.formValidation();t.correct?(fetch("".concat(b.baseCorsUrl,"login/").concat(a.state.login,".").concat(a.state.pass)).then((function(e){if(e.ok)return e.json();throw new Error("error ",e.status)})).then((function(e){Object(Q.a)(e,1)[0]?(a.setState({message:"Logowanie poprawne",loading:!1,alert:!1}),localStorage.setItem("state","login"),localStorage.setItem("user",a.state.login),a.props.history.push({pathname:"/sensitive-cra/admin",user:a.state.login})):a.setState({message:"B\u0142\u0119dny login lub has\u0142o",loading:!1,alert:!0})})).catch((function(e){return console.log(e)})),a.setState({loading:!0,errors:{login:!1,pass:!1}})):a.setState({errors:{login:!t.login,pass:!t.password}})},a.formValidation=function(){var e=!1,t=!1,n=!1;return a.state.login.length>=4&&-1===a.state.login.indexOf(" ")&&(e=!0),a.state.pass.length>=8&&a.state.pass.length<=20&&(t=!0),e&&t&&(n=!0),{correct:n,login:e,password:t}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form myForm",onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("h2",null,"Panel logowania"),r.a.createElement("div",{className:"form__field"},r.a.createElement("input",{type:"text",name:"login",id:"login",className:this.state.errors.login?"form__input invalidate":this.state.login.length>0?"form__input filled":"form__input",value:this.state.login,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"login",className:"form__label"},"Login"),this.state.errors.login&&r.a.createElement("span",{className:"form__alert"},this.messages.login_incorrect)),r.a.createElement("div",{className:"form__field"},r.a.createElement("input",{type:"password",name:"pass",id:"pass",className:this.state.errors.pass?"form__input invalidate":this.state.pass.length>0?"form__input filled":"form__input",value:this.state.pass,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"pass",className:"form__label"},"Has\u0142o"),this.state.errors.pass&&r.a.createElement("span",{className:"form__alert"},this.messages.password_incorrect)),r.a.createElement("button",{className:"btn form__button"},"Zaloguj")),r.a.createElement("aside",{className:"otherInformation"},this.state.loading&&r.a.createElement(E,null),this.state.message&&r.a.createElement("h3",{className:this.state.alert?"form__alert":"form__confirmation"},this.state.message)))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.removeItem("state"),localStorage.removeItem("user"),setTimeout((function(){return e.setState({redirect:!0})}),500)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.b,{render:function(){return e.state.redirect?r.a.createElement(k.a,{to:"/sensitive-cra/"}):r.a.createElement("div",null,r.a.createElement("h3",null,"Wylogowano"),r.a.createElement(E,null))}}))}}]),t}(n.Component),te=(a(237),function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"err-info"},"B\u0142\u0105d"),r.a.createElement("h2",{className:"bigInt"},"404"),r.a.createElement("h3",{className:"err-info"},"Strona o podanym adresie nie istnieje"),r.a.createElement("div",{className:"fly"}),r.a.createElement("div",{className:"err-kittyCont"},r.a.createElement("div",{className:"err-kitty"},r.a.createElement("div",{className:"err-body"}),r.a.createElement("div",{className:"err-head"},r.a.createElement("div",{className:"err-ears"},r.a.createElement("div",{className:"err-ear-left"}),r.a.createElement("div",{className:"err-ear-right"})),r.a.createElement("div",{className:"err-face"},r.a.createElement("div",{className:"err-eye-left"}),r.a.createElement("div",{className:"err-eye-right"}),r.a.createElement("div",{className:"err-nose"}),r.a.createElement("div",{className:"whiskers-right"}),r.a.createElement("div",{className:"whiskers-left"}))),r.a.createElement("div",{className:"err-tail"}))))}),ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.d,null,r.a.createElement(k.b,{path:"/sensitive-cra/",exact:!0,component:O}),r.a.createElement(k.b,{path:"/sensitive-cra/story/:id",component:x}),window.innerWidth>b.desktopSize&&r.a.createElement(k.b,{path:"/sensitive-cra/admin",component:G}),r.a.createElement(k.b,{path:"/sensitive-cra/login",component:X}),r.a.createElement(k.b,{path:"/sensitive-cra/logout",component:ee}),r.a.createElement(k.b,{component:te})))},ne=(a(238),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Sensitive"))}),re=a(111),oe=a.n(re),se=(a(239),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={firstTime:!0,play:!1,volume:1},a.audio=new Audio(oe.a),a.audiosource=r.a.createElement("div",{className:"description description--ext"},r.a.createElement("p",null,"\xabCute\xbb from",r.a.createElement("a",{className:"external",href:"https://www.bensound.com"},"Bensound.com"))),a.playHandler=function(){a.state.play?a.audio.pause():a.audio.play(),a.setState((function(e){return{firstTime:!1,play:!e.play}}))},a.volumeHandler=function(e){var t,n=a.state.volume;n>=0&&n<=1&&e.deltaY>0?t=0===n?n:(1e3*n-e.deltaY)/1e3:n<=1&&n>=0&&e.deltaY<0&&(t=1===n?n:(1e3*n-e.deltaY)/1e3),a.audio.volume=n,a.setState({volume:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"kittyContainer"},r.a.createElement("div",{className:"btn kitty",onClick:this.playHandler,onWheel:this.volumeHandler},r.a.createElement("div",{className:"body"}),r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"ears"},r.a.createElement("div",{className:"ear-left"}),r.a.createElement("div",{className:"ear-right"})),r.a.createElement("div",{className:"face"},r.a.createElement("div",{className:"eye-left"}),r.a.createElement("div",{className:"eye-right"}),r.a.createElement("div",{className:"nose"}))),r.a.createElement("div",{className:"tail"}),this.state.firstTime&&r.a.createElement("span",{className:"description"}," Kliknij!"),this.state.play&&this.audiosource)))}}]),t}(n.Component));a(240);d.b.add(p.a,p.b,p.f,p.m,p.i,p.j,p.g,p.d,p.e,p.l,p.c,p.h,p.k);var ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={lightMode:!1},a.handleColorMode=function(){a.setState((function(e){return{lightMode:!e.lightMode}}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{basename:"/"},r.a.createElement("div",{className:this.state.lightMode?"appContainer light-mode":"appContainer"},r.a.createElement("nav",{className:"navigation"},r.a.createElement(N,{changeColor:this.handleColorMode,lightMode:this.state.lightMode})),r.a.createElement("header",{className:"banner"},r.a.createElement(y,null)),r.a.createElement("main",{className:"mainContainer"},r.a.createElement(ae,null)),r.a.createElement("footer",{className:"footer"},r.a.createElement(ne,null)),r.a.createElement(se,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.ca6f921b.chunk.js.map