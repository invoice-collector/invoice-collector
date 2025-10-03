
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ToyaEboaCollector extends SketchCollector {

    static CONFIG = {
        id: "toya_eboa",
        name: "TOYA eBOA",
        description: "i18n.collectors.toya_eboa.description",
        version: "0",
        website: "https://eboa.toya.net.pl/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2378377.jpg",
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
        entryUrl: "https://eboa.toya.net.pl/payment",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ToyaEboaCollector.CONFIG);
    }
}
