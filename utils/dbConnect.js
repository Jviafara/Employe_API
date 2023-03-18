const mongoose = require('mongoose');
module.exports = mongoose
	.connect(
		'mongodb+srv://jviafara:d3OVMDaXNXzlJCXG@basics.gj9gme0.mongodb.net/MVC?retryWrites=true&w=majority'
	)
	.then(() => console.log('Db connected'))
	.catch((err) => console.log(err.message));
