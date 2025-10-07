
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KickofflabsCollector extends SketchCollector {

    static CONFIG = {
        id: "kickofflabs",
        name: "kickofflabs",
        description: "i18n.collectors.kickofflabs.description",
        version: "0",
        website: "https://app.kickofflabs.com/users/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122131.jpg",
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
        entryUrl: "https://app.kickofflabs.com/users/account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KickofflabsCollector.CONFIG);
    }
}
