import { useState} from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
# Welcome to my React Markdown Previewer! 

## I've tried to include all the cool stuff for you &#x1F600;

#### And check out my GitHub profile down below~
&#x1F447;

[by Youngeun](https://www.github.com/JYoungeun)

// Here's some code, \`<div className="text"></div>\`, between 2 backticks.

\`\`\`
// And this is multi-line code, which is contained by 3 backticks at the beginning and end.

function Greeting(props, thisFunction) {
  if (props && thisFunction) {
    return <h1>Hello, {props.name}!</h1>;
  }
}
\`\`\`

- First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
`);

marked.setOptions({
  breaks: true
})

  return (
    <div className="App">
      <textarea 
        id="editor" 
        onChange={(event) => {setText(event.target.value)}}
        value={text}
      ></textarea>
      <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      ></div>
    </div>
  );
}

export default App;
