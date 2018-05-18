/**
 * IOS消息体.
 * @author Liees
 * @name Builder
 * @desc 构建发送给IOS设备的Message对象。
 */

const Message = require('./message');
const Constants = require('./constants');

class iosBuilder extends Message {
    constructor() {
        super();
        this.soundUrl = 'sound_url';
        this.badge = 'badge';
        this.apsProperFields = [];
    }
    description(description) {
        this.description = description;
    }

    timeToLive(ttl) {
        this.time_to_live = ttl;
    }

    timeToSend(timeToSend) {
        this.time_to_send = timeToSend;
    }

    soundUrl(url) {
        this.Extra(IOSBuilder.sound_url, url);
    }

    badge(badge) {
        this.Extra(IOSBuilder.badge, badge);
    }

    extra(key, value) {
        this.extra[key] = value;
    }

    title(title) {
        this.apsProperFields["title"] = title;
    }

    subtitle(subtitle) {
        this.apsProperFields["subtitle"] = subtitle;
    }

    body(body) {
        this.apsProperFields["body"] = body;
    }

    mutableContent(mutableContent) {
        this.apsProperFields["mutable-content"] = mutableContent;
    }

    apsProperFields(key, value) {
        this.apsProperFields[key] = value;
    }
    build() {
        let keys = ['description', 'time_to_live', 'time_to_send'];
        for (let key of keys) {
            if (this[key]) {
                this.fields[key] = this[key];
                this.json_infos[key] = this[key];
            }
        }
        let JsonExtra = {};
        for (var extraKey in this.extra) {
            let extraValue = this.extra[extraKey];
            this.fields[Message.EXTRA_PREFIX + extraKey] = extraValue;
            JsonExtra[extraKey] = extraValue;
        }
        this.json_infos['extra'] = JsonExtra;
    }
}
