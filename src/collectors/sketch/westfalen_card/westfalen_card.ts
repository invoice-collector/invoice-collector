
import { SketchCollector } from '../../sketchCollector';

export class WestfalenCardCollector extends SketchCollector {

    static CONFIG = {
        id: "westfalen_card",
        name: "Westfalen Card",
        description: "i18n.collectors.westfalen_card.description",
        version: "0",
        website: "https://id.westfalen.com/DigitalServicesLogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203091.jpg",
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
        entryUrl: "https://id.westfalen.com/DigitalServicesLogin",
    }

    constructor() {
        super(WestfalenCardCollector.CONFIG);
    }
}
