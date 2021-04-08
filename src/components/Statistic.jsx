import React, { Component } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
import { Arrow, Equal }                     from './Shape.jsx';


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
        let gate = null
        let evolution = null
        
        if(statistic){

            let current = statistic.history[statistic.history.length - 1].value
            let previous = statistic.history[statistic.history.length -2].value

            if(qualitygate){
                gate = (
                    <div className="sonar__statistic__gate">
                        &lt; {qualitygate.error}
                    </div>
                )
                console.log(current, previous)
                if(current > previous){
                    evolution = (<Arrow/>)
                }else if(current < previous){
                    evolution = (<Arrow rotate={true} color="#27ae60"/>)
                } else {
                    evolution = (<Equal/>)
                }
            }
            

            node = (
                <div className="sonar__statistic__stat">
                    <div className="sonar__statistic__name">
                        {statistic.name}
                    </div>
                    <div className="sonar__statistic__content">
                        <div className="sonar__statistic__value">
                            {statistic.history[statistic.history.length - 1].value}
                        </div>
                        {gate}
                        <div>
                            {evolution}
                        </div>
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
