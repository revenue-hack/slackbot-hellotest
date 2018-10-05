const Botkit = require("botkit");
require('dotenv').config();
const slackToken = process.env.SLACK_TOKEN;

const controller = Botkit.slackbot({
    debug: true,
});

controller.spawn({ token: slackToken }).startRTM((err, bot, payload) => {
    if (err) {
        throw new Error(err);
    }
});

// 指定した単語が、指定の方法で投稿された場合に、コールバックを実行する
controller.hears(["hello"], ["direct_mention"], (bot, message) => {
    bot.reply(message, "World");
});
