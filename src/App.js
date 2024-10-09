import { useState} from 'react';
import { marked } from 'marked';
import './App.css';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [text, setText] = useState(`
# Welcome to my React Markdown Previewer! 
---

## Here's some cool stuff for you to look at...

#### And don't forget to check out my GitHub profile~ &#x1F449; [Youngeun](https://www.github.com/JYoungeun)

This is some code, \`<div className="text"></div>\`, between 2 backticks.

\`\`\`
This is multi-line code:

function Greeting(props, thisFunction) {
  if (props && thisFunction) {
    return <h1>Hello, {props.name}!</h1>;
  }
}
\`\`\`

You can make text **bold** or *italicized* or even ***BOTH!***

So why do programmers prefer **dark** mode?

Because <mark>light</mark> attracts ~bugs~. &#x1F41B; &#x1F41B;

That is so funny! &#x1F606;

Ok moving on...

You can do 
> blockquotes
>
>> or even nested blockquotes!

And if you’re feeling adventurous, why not throw in some tables for extra flair?

| Wild Header | Crazy Header | Another Header? |
|-------------|--------------|------------------|
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

Or you could create a task list to check off your programming languages!
- [x] JavaScript
- [ ] Python
- [ ] Java
- [x] C++
- [ ] Ruby
- [ ] Go
- [ ] Swift
- [ ] PHP
- [x] TypeScript
- [ ] Rust

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](${logo})
`);
const [editorHeight, setEditorHeight] = useState('18rem');

const toggleEditorHeight = () => {
  setEditorHeight(prevHeight => (prevHeight === '18rem' ? '36rem' : '18rem'));
};

marked.setOptions({
  breaks: true
})

  return (
    <div className="App">
      <div id="editor-container">
        <div id="editor-banner">
          <img id="banner-logo" src={logo} alt="Logo"></img>
          Editor
          <button id="expand-compress" onClick={toggleEditorHeight}>
            <i className={`fa ${editorHeight === '18rem' ? 'fa-arrows-alt' : 'fa-compress'}`}></i>
          </button>
        </div>
        <textarea 
          id="editor" 
          onChange={(event) => {setText(event.target.value)}}
          value={text}
          style={{ height: editorHeight, resize: 'none' }}
        ></textarea>
      </div>
      <div id="preview-container">
        <div id="preview-banner">
          <img id="banner-logo" src={logo} alt="Logo"></img>
          Preview
        </div>
        <div 
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
        ></div>
      </div>
    </div>
  );
}

export default App;