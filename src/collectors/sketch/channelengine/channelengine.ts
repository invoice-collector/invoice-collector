
import { SketchCollector } from '../../sketchCollector';

export class ChannelengineCollector extends SketchCollector {

    static CONFIG = {
        id: "channelengine",
        name: "channelengine",
        description: "i18n.collectors.channelengine.description",
        version: "0",
        website: "https://wwww.channelengine.net/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24904.jpg",
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
        entryUrl: "https://wwww.channelengine.net/login",
    }

    constructor() {
        super(ChannelengineCollector.CONFIG);
    }
}
