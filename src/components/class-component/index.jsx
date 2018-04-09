import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends PureComponent {
    static propTypes = {

    }
    static defaultProps = {

    }
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return(
            <View
                style={this.getHeight().view}
            >
                {this.props.children}
            </View>
        );
    }
}

export default ClassComponent;