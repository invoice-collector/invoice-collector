
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NukiCollector extends SketchCollector {

    static CONFIG = {
        id: "nuki",
        name: "nuki",
        description: "i18n.collectors.nuki.description",
        version: "0",
        website: "https://shop.nuki.io/de/mein-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1480719.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://shop.nuki.io/de/mein-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NukiCollector.CONFIG);
    }
}
