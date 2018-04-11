import React, { PureComponent } from 'react';

class PlanCard extends PureComponent {
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

export default PlanCard;
