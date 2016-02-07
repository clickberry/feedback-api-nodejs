// env
if (!process.env.NSQD_ADDRESS) {
  console.log("NSQD_ADDRESS environment variable required.");
  process.exit(1);
}

var events = require('events');
var util = require('util');
var nsq = require('nsqjs');

function Bus(options) {
  options = options || {};
  options.nsqdAddress = options.nsqdAddress || process.env.NSQD_ADDRESS;
  options.nsqdPort = options.nsqdPort || process.env.NSQD_PORT || '4150';

  var bus = this;
  events.EventEmitter.call(this);

  // connect to the Bus
  var writer = new nsq.Writer(options.nsqdAddress, parseInt(options.nsqdPort, 10));
  writer.connect();
  writer.on('ready', function () {
    //bus._writer = writer;
  });
  bus._writer = writer;
}

util.inherits(Bus, events.EventEmitter);

Bus.prototype.publishFeedback = function (feedback, fn) {
  this._writer.publish('feedbacks', feedback, fn);
};

module.exports = Bus;
