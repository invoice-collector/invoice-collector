
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EverdropCollector extends SketchCollector {

    static CONFIG = {
        id: "everdrop",
        name: "Everdrop",
        description: "i18n.collectors.everdrop.description",
        version: "0",
        website: "https://www.everdrop.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4426734.jpg",
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
        entryUrl: "https://www.everdrop.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EverdropCollector.CONFIG);
    }
}
