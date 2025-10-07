
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PensakiCollector extends SketchCollector {

    static CONFIG = {
        id: "pensaki",
        name: "Pensaki",
        description: "i18n.collectors.pensaki.description",
        version: "0",
        website: "https://www.pensaki.com/de/my/shop/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368819.jpg",
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
        entryUrl: "https://www.pensaki.com/de/my/shop/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PensakiCollector.CONFIG);
    }
}
