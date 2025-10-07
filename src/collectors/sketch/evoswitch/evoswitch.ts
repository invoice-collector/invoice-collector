
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvoswitchCollector extends SketchCollector {

    static CONFIG = {
        id: "evoswitch",
        name: "Evoswitch",
        description: "i18n.collectors.evoswitch.description",
        version: "0",
        website: "https://auth.evoswitch.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32359.jpg",
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
        entryUrl: "https://auth.evoswitch.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvoswitchCollector.CONFIG);
    }
}
