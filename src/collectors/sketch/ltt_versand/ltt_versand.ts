
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LttVersandCollector extends SketchCollector {

    static CONFIG = {
        id: "ltt_versand",
        name: "LTT Versand",
        description: "i18n.collectors.ltt_versand.description",
        version: "0",
        website: "https://www.ltt-versand.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2669939.jpg",
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
        entryUrl: "https://www.ltt-versand.de/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LttVersandCollector.CONFIG);
    }
}
