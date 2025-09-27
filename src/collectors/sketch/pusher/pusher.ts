
import { SketchCollector } from '../../sketchCollector';

export class PusherCollector extends SketchCollector {

    static CONFIG = {
        id: "pusher",
        name: "Pusher",
        description: "i18n.collectors.pusher.description",
        version: "0",
        website: "https://dashboard.pusher.com/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8838.jpg",
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
        entryUrl: "https://dashboard.pusher.com/plans",
    }

    constructor() {
        super(PusherCollector.CONFIG);
    }
}
