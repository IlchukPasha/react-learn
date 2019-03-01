import React, {Component} from 'react';

class Article extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: true
  //   };
  //   this.handleClick = handleClick.bind(this); // handleClick is out of the class body
  // }

  // експерементальний синтаксис
  // Даний синтаксис не є частиною ES6. Щоб вн працював потрібно мати babel-plugin-transform-class-properties
  state = {
    isOpen: true
  };
  // стрілочна функція бере контекст з свого округу, тобто в даному випадку контекст компонента Article
  // а звичайна функція мала б в this свій контекст і відповідно не могли б доступитися до стейту
  // але в звичайну можна забайндить this, handleClick.bind(this)
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section>{article.text}</section>
    return (
      <div>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>
            {this.state.isOpen ? 'close' : 'open'}
          </button>
        </h2>
        {body}
        <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
      </div>
    )
  }
}

// function Article(props) {
//   const { article } = props;
//   const body = <section>{article.text}</section>
//   return (
//     <div>
//       <h2>
//         {article.title}
//         <button onClick={handleClick}>Close</button>
//       </h2>
//       {body}
//       <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
//     </div>
//   )
// }

// function handleClick() {
//   console.log('clicked');
// }

export default Article;