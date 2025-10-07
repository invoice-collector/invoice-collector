
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VerspierenAssurproCollector extends SketchCollector {

    static CONFIG = {
        id: "verspieren_assurpro",
        name: "VERSPIEREN Assurpro",
        description: "i18n.collectors.verspieren_assurpro.description",
        version: "0",
        website: "https://assurpro.verspieren.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730411.jpg",
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
        entryUrl: "https://assurpro.verspieren.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VerspierenAssurproCollector.CONFIG);
    }
}
