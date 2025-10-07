
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JulepCollector extends SketchCollector {

    static CONFIG = {
        id: "julep",
        name: "JULEP",
        description: "i18n.collectors.julep.description",
        version: "0",
        website: "https://app.julep.de/podcaster/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1240136.jpg",
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
        entryUrl: "https://app.julep.de/podcaster/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JulepCollector.CONFIG);
    }
}
