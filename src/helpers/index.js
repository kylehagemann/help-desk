const replacer = (key, val) => typeof val !== "object" ? String(val) : !val ? "" : val;

export const formatData = dataToFormat => {
	const stringifiedData = [];
	!isEmpty(dataToFormat) && dataToFormat.forEach(itemToFormat => {
		!isEmpty(itemToFormat) && stringifiedData.push(JSON.parse(JSON.stringify(itemToFormat), replacer));
	});
	return stringifiedData;
}

export const isEmpty = (...checkEmpty) => {
  const checkList = checkEmpty;
  return checkList.some(entry => {
		if (entry) {
			if (typeof entry === 'string' && entry.length === 0) {
				return true; 
			} 
			if (typeof entry === 'object') {
				if (Array.isArray(entry) && entry.length === 0) {
					return true;
				}
				if (Object.entries(entry).length === 0 && entry.constructor) {
					return true;
				}
			} 
			return false;
		}
		return true;
	}
	);
};
