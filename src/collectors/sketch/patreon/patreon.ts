
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PatreonCollector extends SketchCollector {

    static CONFIG = {
        id: "patreon",
        name: "Patreon",
        description: "i18n.collectors.patreon.description",
        version: "0",
        website: "https://www.patreon.com/pledges?ty=h",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14819.jpg",
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
        entryUrl: "https://www.patreon.com/pledges?ty=h",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PatreonCollector.CONFIG);
    }
}
