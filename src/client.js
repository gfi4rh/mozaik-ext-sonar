import fetch from 'node-fetch';
import chalk from 'chalk';

const client = mozaik => {

	return {

		qualitygates ( params ) {
			mozaik.logger.info(chalk.yellow(`[sonar] calling sonar.qualitygates`));

			let url = `${params.url}/api/qualitygates/show?id=AWJCgOK86dyDOvZApxk8&format=json`;
			
			return fetch(url)
				.then(res => res.json())
				.then(json => json.conditions)
				.catch(err => err)
		},

		statistic ( params ) {
			mozaik.logger.info(chalk.yellow(`[sonar] calling sonar.statistic`));

			let url = `${params.url}/api/measures/search_history?component=${params.componentKey}&metrics=${params.stat.id}`;

			return fetch(`${url}&ps=0`)
				.then(res => res.json())
				.then(json => fetch(`${url}&ps=${json.paging.total}`))
				.then(res => res.json())
				.then(json => json.measures[0])
				.catch(err => err)
		},
	}
};

export default client;
