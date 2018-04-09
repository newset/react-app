import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInfo } from '../../redux/actions';
import './index.css';

class Imitate extends PureComponent {
    render() {
        return (
            <div onClick={this.props.getInfo}>

            </div>
        );
    }
}

export default connect(
    (state) => ({
      info: state.info,
    }),
    (dispatch) => ({
        getInfo: (q) => dispatch(getInfo(q)),
    }),
)(Imitate);
