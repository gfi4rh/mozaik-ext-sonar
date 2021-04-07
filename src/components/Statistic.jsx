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

        const { url, componentKey, stat } = this.props;

        return {
            id : `sonar.statistic.${stat.id}`,
            params : {
                url : url,
                componentKey : componentKey,
                stat : stat
            }
        }
    }

    onApiData(statistic){
        const { stat } = this.props;
        this.setState({
            statistic : {
                id : stat.id,
                name : stat.name,
                history : statistic.history
            }
        })
    }

    render() {

        const { statistic } = this.state;
        const { qualitygate } = this.props;

        return (
            <div className="sonar__statistic__stat">
                {statistic && <div>{statistic.name} : {statistic.history[statistic.history.length - 1].value} &lt; {qualitygate.error}</div>}
            </div>
        );
    }
}

Statistic.displayName = 'Statistic';

reactMixin(Statistic.prototype, ListenerMixin);
reactMixin(Statistic.prototype, Mozaik.Mixin.ApiConsumer);

export default Statistic;
