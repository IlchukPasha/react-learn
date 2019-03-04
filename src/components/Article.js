// import React, {Component, PureComponent} from 'react';
import React, {PureComponent} from 'react';

// class Article extends Component {
class Article extends PureComponent { // PureComponent має в собі реалізований ShouldComponentUpdate для оптимізації
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

  // componentWillMount()  use for get data from server

  render() {
    const { article } = this.props;
    const body = this.state.isOpen && <section className="card-text">{article.text}</section>
    return (
      <div className="card mx-auto" style= {{ width: '80%' }}>
        <div className="card-header">
          <h2>
            {article.title}
            <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
              {this.state.isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted" style={{ marginBottom: '10px' }}>
            creation date: {(new Date(article.date)).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    )
  }

  // componentDidMount()
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