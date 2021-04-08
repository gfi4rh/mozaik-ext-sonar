import React, { Component } from 'react'
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

        //{statistic && <div>{statistic.name} : {statistic.history[statistic.history.length - 1].value} {qualitygate && <div>&lt; {qualitygate.error}</div>}</div>}

        let node = null

        if(statistic){

            let gate = null

            if(qualitygate){
                gate = (
                    <span className="sonar__statistic__gate">
                        &lt; {qualitygate.error}
                    </span>
                );
            }

            node = (
                <div className="sonar__statistic__stat">
                    <div className="sonar__statistic__name">
                        {statistic.name}
                    </div>
                    <div className="sonar__statistic__value">
                        {statistic.history[statistic.history.length - 1].value}
                        {gate}
                    </div>
                    
                </div>
            );
        }

        return node
    }
}

Statistic.displayName = 'Statistic';

reactMixin(Statistic.prototype, ListenerMixin);
reactMixin(Statistic.prototype, Mozaik.Mixin.ApiConsumer);

export default Statistic;
