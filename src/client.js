import fetch from 'node-fetch';
import chalk from 'chalk';

const client = mozaik => {

	const apiCalls = {

		statistic ( params ) {
			mozaik.logger.info(chalk.yellow(`[sonar] calling sonar.statistic`));

			return fetch(`${params.url}/api/measures/search_history?component=${params.componentKey}&metrics=${params.stat.id}`,{
				method : 'GET',
				headers : {'Accept': 'application/json'}
			}).then(res => res.json());
		},
	}

		return apiCalls;
};

export default client;
