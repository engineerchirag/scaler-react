class YooHoo extends React.Component {
    render() {
      return React.createElement(
        'h2',
        {},
        'YooHoo React!'
      );
    }
  }
  
  const domContainer = document.querySelector('#root');
  ReactDOM.render(React.createElement(YooHoo), domContainer);


  