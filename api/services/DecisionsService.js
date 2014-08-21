/**
 *
 * @param options
 */

var args = require('minimist')(process.argv.slice(2));

exports.decide = function(options, cb) {

    //console.log(args.role);

    cb(args.role);
};