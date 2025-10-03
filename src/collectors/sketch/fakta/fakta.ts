
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FaktaCollector extends SketchCollector {

    static CONFIG = {
        id: "fakta",
        name: "Fakta",
        description: "i18n.collectors.fakta.description",
        version: "0",
        website: "https://fakta.dk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21977.jpg",
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
        entryUrl: "https://fakta.dk",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FaktaCollector.CONFIG);
    }
}
