var chop = function(s) {
	return s.slice(0, s.length - 1);
}

module.exports = exports = chop;
exports.chop = chop;

var chomp = function(s) {
	if (s.length < 1) {
		return s;
	}
	else {
		var result = s.slice(0, s.length);

		while (result.length > 1 && result[result.length - 1] == '\n' || result[result.length - 1] == '\r') {
			result = result.slice(0, result.length - 1);
		}

		return result;
	}
}

exports.chomp = chomp;
