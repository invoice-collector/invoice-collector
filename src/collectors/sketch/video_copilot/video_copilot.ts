
import { SketchCollector } from '../../sketchCollector';

export class VideoCopilotCollector extends SketchCollector {

    static CONFIG = {
        id: "video_copilot",
        name: "Video Copilot",
        description: "i18n.collectors.video_copilot.description",
        version: "0",
        website: "https://www.videocopilot.net/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178684.jpg",
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
        entryUrl: "https://www.videocopilot.net/account/orders/",
    }

    constructor() {
        super(VideoCopilotCollector.CONFIG);
    }
}
