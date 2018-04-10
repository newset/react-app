import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ClassComponent extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default ClassComponent;
