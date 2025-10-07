
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AzhCollector extends SketchCollector {

    static CONFIG = {
        id: "azh",
        name: "AZH",
        description: "i18n.collectors.azh.description",
        version: "0",
        website: "https://mein.hebammen-azh.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2549320.jpg",
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
        entryUrl: "https://mein.hebammen-azh.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AzhCollector.CONFIG);
    }
}
