var Slack = require('node-slack');
var config = require('./config');

function noop() {};

module.exports = function () {
    var slack = new Slack(config.domain, config.token);

    var params = {
        channel: config.channel,
        username: config.username,
        attachments: []
    };

    var sendMessage = function (message) {
        // `text` is mandatory:
        params.text = message.fallback;
        params.attachments[0] = message;

        slack.send(params, noop);
    };

    return {
        sendMessage: sendMessage
    };
}();