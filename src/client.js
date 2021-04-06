import fetch from 'node-fetch';
import chalk from 'chalk';

const client = mozaik => {

	const apiCalls = {

		statistic ( params ) {
			return fetch(`${params.url}/api/measures/component?componentKey=${params.componentKey}&metrics=${params.stat.id}`)
				.then(res => res.json());
		}
	}

		return apiCalls;
};

export default client;
