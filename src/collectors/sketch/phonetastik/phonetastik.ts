
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhonetastikCollector extends SketchCollector {

    static CONFIG = {
        id: "phonetastik",
        name: "Phonetastik",
        description: "i18n.collectors.phonetastik.description",
        version: "0",
        website: "https://phonetastik.de/account/order-transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4571728.jpg",
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
        entryUrl: "https://phonetastik.de/account/order-transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhonetastikCollector.CONFIG);
    }
}
