
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DekolightCollector extends SketchCollector {

    static CONFIG = {
        id: "dekolight",
        name: "Dekolight",
        description: "i18n.collectors.dekolight.description",
        version: "0",
        website: "https://shop.deko-light.com/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1754240.jpg",
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
        entryUrl: "https://shop.deko-light.com/account/order",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DekolightCollector.CONFIG);
    }
}
