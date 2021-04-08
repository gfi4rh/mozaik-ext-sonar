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
        let style = null
        let value = null
        
        if(statistic){

            let current = statistic.history[statistic.history.length - 1].value
            let previous = statistic.history[statistic.history.length -2].value

            if(qualitygate){

                if(current < qualitygate.error){
                    style = {color:"#27ae60"}
                } else {
                    style = {color:"#c0392b"}
                }

                gate = (
                    <div className="sonar__statistic__gate">
                        &lt; {statistic.id === "duplicated_lines_density" ? qualitygate.error+"%" : qualitygate.error}
                    </div>
                )
                if(current > previous){
                    evolution = (<div className="sonar__statistic__evolution"><Arrow/></div>)
                }else if(current < previous){
                    evolution = (<div className="sonar__statistic__evolution"><Arrow rotate={true} color="#27ae60"/></div>)
                } else {
                    evolution = (<div className="sonar__statistic__evolution"><Equal/></div>)
                }
            }

            switch(statistic.id){
                case "sqale_index" : 
                    value =  `${ current === 0 ? '':`${Math.floor(current/60/8)} j`} ${(current/60)%8 == 0 ? '' :`${(current/60)%8} h`} `
                case "duplicated_lines_density" :
                    value = current+'%'
                default :
                    value = current
            } 
            

            node = (
                <div className="sonar__statistic__stat">
                    <div className="sonar__statistic__name">
                        {statistic.name}
                    </div>
                    <div className="sonar__statistic__content">
                        <div style={style} className="sonar__statistic__value">
                            {value}
                        </div>
                        <div className="sonar__statistic__informations">
                            {gate}
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
