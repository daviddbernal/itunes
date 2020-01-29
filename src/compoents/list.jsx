import React from "react";

class List extends React.Component {
  render() {
    const list = this.props.items.map((item, index) => (
      <li key={index}>{item[this.props.type]}</li>
    ));
    return <ul>{list}</ul>;
  }
}

export default List;
