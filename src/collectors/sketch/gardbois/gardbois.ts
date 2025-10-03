
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GardboisCollector extends SketchCollector {

    static CONFIG = {
        id: "gardbois",
        name: "Gardbois",
        description: "i18n.collectors.gardbois.description",
        version: "0",
        website: "https://www.gardbois.fr/mon-compte/atoo-sync-documents/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180700.jpg",
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
        entryUrl: "https://www.gardbois.fr/mon-compte/atoo-sync-documents/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GardboisCollector.CONFIG);
    }
}
