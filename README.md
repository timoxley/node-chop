# chop - A chop()/chomp() library for Node.js

## EXAMPLE

	$ node
	> var chop = require("./chop");
	undefined
	> chop.chop("Howdy!");
	'Howdy'
	> chop.chop("Howdy!\n");
	'Howdy!'
	> chop.chop("Howdy!\n\n");
	'Howdy!\n'
	> chop.chomp("Howdy!\n\n");
	'Howdy!'
	> chop.chomp("Howdy!\r\n");
	'Howdy!'
	> chop.chop("Howdy!\r\n");
	'Howdy!\r'