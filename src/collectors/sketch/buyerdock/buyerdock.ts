
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BuyerdockCollector extends SketchCollector {

    static CONFIG = {
        id: "buyerdock",
        name: "Buyerdock",
        description: "i18n.collectors.buyerdock.description",
        version: "0",
        website: "https://buyerdock.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020554.jpg",
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
        entryUrl: "https://buyerdock.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BuyerdockCollector.CONFIG);
    }
}
