
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ImmobilienWertermittlungCollector extends SketchCollector {

    static CONFIG = {
        id: "immobilien_wertermittlung",
        name: "Immobilien Wertermittlung",
        description: "i18n.collectors.immobilien_wertermittlung.description",
        version: "0",
        website: "https://www.immobilien-wertermittlung.de/user_rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/446098.jpg",
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
        entryUrl: "https://www.immobilien-wertermittlung.de/user_rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ImmobilienWertermittlungCollector.CONFIG);
    }
}
