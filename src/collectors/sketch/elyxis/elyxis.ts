
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElyxisCollector extends SketchCollector {

    static CONFIG = {
        id: "elyxis",
        name: "Elyxis",
        description: "i18n.collectors.elyxis.description",
        version: "0",
        website: "https://extranet.elyxis.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106546.jpg",
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
        entryUrl: "https://extranet.elyxis.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElyxisCollector.CONFIG);
    }
}
