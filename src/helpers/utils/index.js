const Utils = {};

Utils.isDeepEqual = function isDeepEqual(o1, o2) {
	if (isPrimitive(o1) || isPrimitive(o2)) {
		return o1 === o2;
	}

	const keys1 = Object.keys(o1);
	const keys2 = Object.keys(o2);

	if (keys1.length !== keys2.length) {
		return false;
	}

	for (let key of keys1) {
		if (!(key in keys2)) {
			return false;
		}
		if (!isDeepEqual(o1[key], o2[key])) {
			return false;
		}
	}

	return true;
}

const isPrimitive = (val) => {
	return typeof val !== 'object' || val === null;
};

export default Utils;
