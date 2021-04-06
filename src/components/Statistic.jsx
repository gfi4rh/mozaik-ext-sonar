import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';


class Statistic extends Component {

    constructor(props) {
        super(props);  
        this.state = {
            statistic : null
        }
    }

    getApiRequest() {

        const { url, componentKey, stat, gate } = this.props;

        return {
            id : `sonar.statistic.${stat.id}`,
            params : {
                url : url,
                componentKey : componentKey,
                stat : stat,
                history : gate
            }
        }
    }

    onApiData(statistic){
        this.setState({
            statistic : statistic.history[0]
        })
    }

    render() {

        const { statistic } = this.state;

        return (
            <div className="sonar__statitic__line">
                {statistic && statistic.value}
            </div>
        );
    }
}

Statistic.displayName = 'Statistic';

reactMixin(Statistic.prototype, ListenerMixin);
reactMixin(Statistic.prototype, Mozaik.Mixin.ApiConsumer);

export default Statistic;
