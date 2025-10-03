
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElisCollector extends SketchCollector {

    static CONFIG = {
        id: "elis",
        name: "Elis",
        description: "i18n.collectors.elis.description",
        version: "0",
        website: "https://fr.elis.com/en",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648492.jpg",
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
        entryUrl: "https://fr.elis.com/en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElisCollector.CONFIG);
    }
}
