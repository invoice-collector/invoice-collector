
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CaneiDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "canei_digital",
        name: "CANEI.digital",
        description: "i18n.collectors.canei_digital.description",
        version: "0",
        website: "https://app.canei.digital/account/abo",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/753109.jpg",
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
        entryUrl: "https://app.canei.digital/account/abo",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CaneiDigitalCollector.CONFIG);
    }
}
