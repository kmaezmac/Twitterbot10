import express from "express";
import { TwitterApi } from "twitter-api-v2";
import process from "process";
import pg from 'pg';
import https from 'https';
import axios from "axios";

// consumer keys - api key
const appKey = process.env.TWITTER_API_KEY;
// consumer keys - api key secret
const appSecret = process.env.TWITTER_API_SECRET;
const accessToken = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;

const client = new TwitterApi({
    appKey,
    appSecret,
    accessToken,
    accessSecret,
});
client.readWrite;
const app = express();

const emojis = [
    "😀",
    "😆",
    "🤣",
    "😉",
    "🥰",
    "😍",
    "🤩",
    "😘",
    "😚",
    "😋",
    "😝",
    "🤑",
    "🫣",
    "🤫",
    "🤔",
    "🫡",
    "😏",
    "🥳",
    "😎",
    "😲",
    "😮",
    "😳",
    "🥺",
    "🥹",
    "😻",
    "🙊",
    "💖",
    "❤️‍🔥",
    "💯",
    "🐶",
    "🐺",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🐸",
    "🐯",
    "🐨",
    "🐻",
    "🐷",
    "🐽",
    "🐮",
    "🐗",
    "🐵",
    "🐒",
    "🐴",
    "🐑",
    "🐘",
    "🐼",
    "🐧",
    "🐦",
    "🐤",
    "🐥",
    "🐣",
    "🐔",
]

const moppy = async () => {
    var text = "【モッピー】1,000万人以上が利用する国内最大級ポイ活応援サービス！今なら入会ボーナスもらえるチャンス★ "
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    var hashTag = "#モッピー #moppy #ポイ活 #お小遣い稼ぎ #節約 #副業"
    console.log(random)
    var tweet = text + random + " " + process.env.MOPPY_URI + " " + hashTag;
    console.log(tweet)
    client.v2.tweet(tweet);
}

app.get("/moppy", (req, res) => {
    try {
        moppy(process.env.TIKTOK_AMOUNT, process.env.TIKTOK_URL, process.env.HATENA_URL);
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const mercari = async () => {
    var text = "メルカリを使ってみてね！¥n500円分お得にお買い物できる招待コード【" + process.env.MERCARI_CODE + "】を贈りました🎁¥nアプリをインストールして登録してね"
    var random = emojis[Math.floor(Math.random() * emojis.length)];
    var hashTag = "#メルカリ #Mercari #お小遣い稼ぎ #節約 #副業"
    console.log(random)
    var tweet = text + random + " " + process.env.MERCARI_URI + " " + hashTag;
    console.log(tweet)
    client.v2.tweet(tweet);
};


app.get("/mercari", (req, res) => {
    try {
        mercari();
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});



app.get("/", (req, res) => {
    try {
        console.log("ログ定期実行")
    } catch (err) {
        console.log(err);
    }
    res.send('get');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);