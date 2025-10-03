
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GlobetrotterPartnerprogrammCollector extends SketchCollector {

    static CONFIG = {
        id: "globetrotter_partnerprogramm",
        name: "Globetrotter-Partnerprogramm",
        description: "i18n.collectors.globetrotter_partnerprogramm.description",
        version: "0",
        website: "https://www.globetrotter-partnerprogramm.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/114543.jpg",
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
        entryUrl: "https://www.globetrotter-partnerprogramm.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GlobetrotterPartnerprogrammCollector.CONFIG);
    }
}
