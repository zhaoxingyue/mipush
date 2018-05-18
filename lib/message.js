/**
 * 消息体.
 * @author Liees
 * @name Message
 * @desc 构建要发送的消息内容。
 */

class Message {
    constructor() {
        this.payload = '';
        this.restricted_package_name = '';
        this.pass_through = 0;
        this.notify_type = 0;
        this.notify_id = 0;
        this.extra = {};
        this.fields = {};
        this.description = '';
        this.title = '';
        this.time_to_live = 0;
        this.time_to_send = 0;
        this.json_infos = {};
    }
    get fields() {
        return this.fields;
    }
    get jsonInfos() {
        return this.json_infos;
    }
}

Message.EXTRA_PREFIX = 'extra.';
Message.APS_PROPER_FIELDS_PREFIX = 'aps_proper_fields.'

/* IOS 使用 */
Message.sound_url = 'sound_url';
Message.badge = 'badge';

module.exports = Message;
