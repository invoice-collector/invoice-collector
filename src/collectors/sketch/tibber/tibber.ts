
import { SketchCollector } from '../../sketchCollector';

export class TibberCollector extends SketchCollector {

    static CONFIG = {
        id: "tibber",
        name: "Tibber",
        description: "i18n.collectors.tibber.description",
        version: "0",
        website: "https://tibber.com/de/portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368222.jpg",
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
        entryUrl: "https://tibber.com/de/portal",
    }

    constructor() {
        super(TibberCollector.CONFIG);
    }
}
