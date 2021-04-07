import fetch from 'node-fetch';
import chalk from 'chalk';

const client = mozaik => {

	const apiCalls = {

		statistic ( params ) {
			mozaik.logger.info(chalk.yellow(`[sonar] calling sonar.statistic`));

			let url = `${params.url}/api/measures/search_history?component=${params.componentKey}&metrics=${params.stat.id}`;

			return fetch(`${url}&ps=0`)
				.then(res => res.json())
				.then(json => fetch(`${url}&ps=${json.paging.total}`))
				.then(res => res.json().measures[0])
		},
	}

		return apiCalls;
};

export default client;
