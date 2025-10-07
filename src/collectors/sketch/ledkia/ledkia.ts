
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LedkiaCollector extends SketchCollector {

    static CONFIG = {
        id: "ledkia",
        name: "LEDKIA",
        description: "i18n.collectors.ledkia.description",
        version: "0",
        website: "https://www.ledkia.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832517.jpg",
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
        entryUrl: "https://www.ledkia.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LedkiaCollector.CONFIG);
    }
}
