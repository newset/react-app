/*
 * File: PlanTasks.jsx
 * Author: insane (luojie@doctorwork.com)
 * Last: insane (luojie@doctorwork.com>) 
 * Date: 2018-04-Th 11:39:40
 * Copyright 2018 - 2018 © Doctorwork
 */

import React, { PureComponent } from 'react';
import PlanCard from '../../components/plan-card';
import './index.styl';

export default class PlanTasks extends PureComponent {
    componentWillMount() {}

    render() {
        return (
            <div className="box">
                <PlanCard />
            </div>
        );
    }
}
