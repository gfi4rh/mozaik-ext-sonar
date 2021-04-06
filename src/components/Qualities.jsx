import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';
import Statistic                       from './Statistic.jsx';


class Qualities extends Component {

    constructor(props) {
        super(props);   
    }

    render() {

        const { url, componentKey, issues, metrics } = this.props

        return (
            <div>
                <div className="widget__header">
                    <span>
                        <span className="widget__header__subject">{this.props.title}</span>
                    </span>
                </div>
                <div className="widget__body">
                    {issues.map(issue => <Statistic url={url} componentKey={componentKey} stat={issue}/>)}
                    {metrics.map(metric => <Statistic url={url} componentKey={componentKey} stat={metric}/>)}
                </div>
            </div>
        );
    }
}

Qualities.displayName = 'Qualities';

reactMixin(Qualities.prototype, ListenerMixin);
reactMixin(Qualities.prototype, Mozaik.Mixin.ApiConsumer);

export default Qualities;
