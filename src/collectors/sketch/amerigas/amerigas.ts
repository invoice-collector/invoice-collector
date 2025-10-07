
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmerigasCollector extends SketchCollector {

    static CONFIG = {
        id: "amerigas",
        name: "AmeriGas",
        description: "i18n.collectors.amerigas.description",
        version: "0",
        website: "https://secure.billtrust.com/AMGS/ig/5587/open",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777437.jpg",
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
        entryUrl: "https://secure.billtrust.com/AMGS/ig/5587/open",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmerigasCollector.CONFIG);
    }
}
