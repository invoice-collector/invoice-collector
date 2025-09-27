
import { SketchCollector } from '../../sketchCollector';

export class RV24Collector extends SketchCollector {

    static CONFIG = {
        id: "r_v24",
        name: "R+V24",
        description: "i18n.collectors.r_v24.description",
        version: "0",
        website: "https://www.rv24.de/vertragscenter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640442.jpg",
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
        entryUrl: "https://www.rv24.de/vertragscenter",
    }

    constructor() {
        super(RV24Collector.CONFIG);
    }
}
