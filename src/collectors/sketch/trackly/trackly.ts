
import { SketchCollector } from '../../sketchCollector';

export class TracklyCollector extends SketchCollector {

    static CONFIG = {
        id: "trackly",
        name: "Trackly",
        description: "i18n.collectors.trackly.description",
        version: "0",
        website: "https://trackly.io/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167034.jpg",
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
        entryUrl: "https://trackly.io/account/billing",
    }

    constructor() {
        super(TracklyCollector.CONFIG);
    }
}
