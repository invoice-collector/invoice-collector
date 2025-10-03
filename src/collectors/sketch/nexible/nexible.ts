
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NexibleCollector extends SketchCollector {

    static CONFIG = {
        id: "nexible",
        name: "Nexible",
        description: "i18n.collectors.nexible.description",
        version: "0",
        website: "https://www.nexible.de/kundenportal/anmelden",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1079784.jpg",
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
        entryUrl: "https://www.nexible.de/kundenportal/anmelden",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NexibleCollector.CONFIG);
    }
}
