import React from 'react';

class Circle extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {}

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return <div className={`circle ${color}`} />;
  }
}

export default Circle;
