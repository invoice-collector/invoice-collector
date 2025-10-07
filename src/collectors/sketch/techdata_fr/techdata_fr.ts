
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TechdataFrCollector extends SketchCollector {

    static CONFIG = {
        id: "techdata_fr",
        name: "Techdata (.fr)",
        description: "i18n.collectors.techdata_fr.description",
        version: "0",
        website: "https://fr.techdata.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/745795.jpg",
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
        entryUrl: "https://fr.techdata.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TechdataFrCollector.CONFIG);
    }
}
