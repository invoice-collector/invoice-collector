
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PumpappCoCollector extends SketchCollector {

    static CONFIG = {
        id: "pumpapp_co",
        name: "PUMPapp.co",
        description: "i18n.collectors.pumpapp_co.description",
        version: "0",
        website: "https://identity.pumpapp.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3015070.jpg",
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
        entryUrl: "https://identity.pumpapp.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PumpappCoCollector.CONFIG);
    }
}
