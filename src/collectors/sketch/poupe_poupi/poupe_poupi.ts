
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PoupePoupiCollector extends SketchCollector {

    static CONFIG = {
        id: "poupe_poupi",
        name: "Poupe poupi",
        description: "i18n.collectors.poupe_poupi.description",
        version: "0",
        website: "https://poupepoupi.com/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035327.jpg",
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
        entryUrl: "https://poupepoupi.com/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PoupePoupiCollector.CONFIG);
    }
}
