import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
import Statistic                       from './Statistic.jsx';


class Qualities extends Component {

    constructor(props) {
        super(props);   
        this.state = {
            qualitygates : null
        }
    }

    getApiRequest() {

        const { url } = this.props;

        return {
            id : `sonar.qualitygates`,
            params : {
                url : url
            }
        }
    }

    onApiData(qualitygates){
        this.setState({
            qualitygates : qualitygates
        })
    }

    render() {

        const { url, componentKey, issues, metrics } = this.props
        const { qualitygates } = this.state;

        let transformIssues = issues.map(issue => <Statistic 
            url={url} 
            componentKey={componentKey} 
            stat={issue}
            qualitygate={qualitygates && qualitygates.filter(qualitygate => qualitygate.metric == issue.id)[0]}
            />)

        let transformMetrics = metrics.map(metric => <Statistic 
            url={url} 
            componentKey={componentKey} 
            stat={metric}
            qualitygate={qualitygates && qualitygates.filter(qualitygate => qualitygate.metric == metric.id)[0]}
            />)

        return (
            <div>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">{this.props.title}</span>
                    </span>
                </div>
                <div className="widget__body sonar__statistic__container">
                    <div className="sonar__statistic__line">
                        {transformIssues}
                    </div>
                    <div className="sonar__statistic__line">
                        {transformMetrics}
                    </div>
                    
                </div>
            </div>
        );
    }
}

Qualities.displayName = 'Qualities';

reactMixin(Qualities.prototype, ListenerMixin);
reactMixin(Qualities.prototype, Mozaik.Mixin.ApiConsumer);

export default Qualities;
