
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpticaCollector extends SketchCollector {

    static CONFIG = {
        id: "optica",
        name: "Optica",
        description: "i18n.collectors.optica.description",
        version: "0",
        website: "https://www.optica.de/meinoptica",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/161950.jpg",
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
        entryUrl: "https://www.optica.de/meinoptica",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpticaCollector.CONFIG);
    }
}
