
// Usando base de dados no https://mlab.com
// Para conectar pelo mongo shell:
// $ mongo ds163382.mlab.com:63382/teste -u <dbuser> -p <dbpassword>

var mongoose = require('mongoose');
mongoose.connect('mongodb://carlo:carlodbteste15@ds163382.mlab.com:63382/teste', { useMongoClient: true });