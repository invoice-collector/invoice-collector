
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnergieeffizienzexpertenCollector extends SketchCollector {

    static CONFIG = {
        id: "energieeffizienzexperten",
        name: "EnergieeffizienzExperten",
        description: "i18n.collectors.energieeffizienzexperten.description",
        version: "0",
        website: "https://www.energie-effizienz-experten.de/fuer-experten/benutzerkonto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/863226.jpg",
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
        entryUrl: "https://www.energie-effizienz-experten.de/fuer-experten/benutzerkonto/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnergieeffizienzexpertenCollector.CONFIG);
    }
}
