
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TreatwellCollector extends SketchCollector {

    static CONFIG = {
        id: "treatwell",
        name: "Treatwell",
        description: "i18n.collectors.treatwell.description",
        version: "0",
        website: "https://www.treatwell.de/geschuetzte-aktion/?route=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32242.jpg",
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
        entryUrl: "https://www.treatwell.de/geschuetzte-aktion/?route=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TreatwellCollector.CONFIG);
    }
}
