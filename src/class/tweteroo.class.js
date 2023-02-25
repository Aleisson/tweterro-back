class User {
    constructor(username, avatar) {
        this.username = username;
        this.avatar = avatar;
    }
}

class Twitter {
    constructor(username, tweet, avatar) {
        this.username = username;
        this.tweet = tweet;
        this.avatar = avatar;
    }
}

export { User, Twitter };