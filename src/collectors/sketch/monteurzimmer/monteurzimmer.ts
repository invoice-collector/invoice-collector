
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonteurzimmerCollector extends SketchCollector {

    static CONFIG = {
        id: "monteurzimmer",
        name: "Monteurzimmer",
        description: "i18n.collectors.monteurzimmer.description",
        version: "0",
        website: "https://www.monteurzimmer.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96853.jpg",
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
        entryUrl: "https://www.monteurzimmer.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonteurzimmerCollector.CONFIG);
    }
}
