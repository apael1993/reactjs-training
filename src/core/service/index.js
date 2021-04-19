import {HOST} from '../constants';

const Service = {};

const constructUrl = (endPoint) => {
	return `${HOST}/${endPoint}`;
};

Service.request = (method, endPoint, successCb, errorCb) => {
	const url = constructUrl(endPoint);

	// TODO: add second argument
	fetch(url)
		.then(response => response.json())
		.then(successCb)
		.catch(errorCb);
};

export default Service;
