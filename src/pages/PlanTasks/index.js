import PlanTasks from './PlanTasks';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const actions = {};

const mapStateToProps = ({ dispatch }) => ({
    actions: bindActionCreators(actions, dispatch)
});

connect(mapStateToProps)(PlanTasks);

export default PlanTasks;
