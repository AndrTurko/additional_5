module.exports = function check(str, config) {
	let pull = [];
	for (let i = 0; i < config.length; i++) {
		for (let j = 0; j < str.length; j++) {
			if (str[j] === config[i][1]) {
				pull.pop();
				continue;
			}
			if (str[j] === config[i][0]) {
				pull.push(str[j]);
				continue;
			}
		}
	}
	if (pull[0] == undefined) return true;
	else return false;
}
