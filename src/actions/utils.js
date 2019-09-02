
function createId() {
	return "" + Math.random().toString(36).substr(2, 9);
}

function getDate() {
	const nowDate = new Date();
	const dayToday = nowDate.getDate();
	const monthToday = nowDate.getMonth()+1;
	const yearToday = nowDate.getFullYear();
	return "" + dayToday+"-"+ monthToday + "-" + yearToday;
}

function isEmptyString(text){
	const replaceText = text.replace(/\s+/g," ").trim();
	let result = (replaceText === '') ? true : false;
	return result;
}

export {createId, getDate, isEmptyString};	