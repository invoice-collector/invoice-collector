
import { SketchCollector } from '../../sketchCollector';

export class SpeedscriberCollector extends SketchCollector {

    static CONFIG = {
        id: "speedscriber",
        name: "SpeedScriber",
        description: "i18n.collectors.speedscriber.description",
        version: "0",
        website: "https://app.speedscriber.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/552912.jpg",
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
        entryUrl: "https://app.speedscriber.com/login",
    }

    constructor() {
        super(SpeedscriberCollector.CONFIG);
    }
}
