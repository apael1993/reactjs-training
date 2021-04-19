import {METHODS} from '../constants';
import Service from '../service';

const API = {};

API.getAction = (endPoint, successCb, errorCb) => {
	Service.request(METHODS.GET, endPoint, successCb, errorCb);
};

API.postAction = () => {};

API.putAction = () => {};

API.deleteAction = () => {};

export default API;
