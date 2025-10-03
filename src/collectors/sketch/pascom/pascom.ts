
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PascomCollector extends SketchCollector {

    static CONFIG = {
        id: "pascom",
        name: "PASCOM",
        description: "i18n.collectors.pascom.description",
        version: "0",
        website: "https://my.pascom.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/186135.jpg",
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
        entryUrl: "https://my.pascom.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PascomCollector.CONFIG);
    }
}
