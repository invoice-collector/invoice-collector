
import { SketchCollector } from '../../sketchCollector';

export class LivechatCollector extends SketchCollector {

    static CONFIG = {
        id: "livechat",
        name: "LiveChat",
        description: "i18n.collectors.livechat.description",
        version: "0",
        website: "https://accounts.livechatinc.com/?client_id=bb9e5b2f1ab480e4a715977b7b1b4279&response_type=token&redirect_uri=https%3A%2F%2Fmy.livechatinc.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29907.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://accounts.livechatinc.com/?client_id=bb9e5b2f1ab480e4a715977b7b1b4279&response_type=token&redirect_uri=https%3A%2F%2Fmy.livechatinc.com",
    }

    constructor() {
        super(LivechatCollector.CONFIG);
    }
}
