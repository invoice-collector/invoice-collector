
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DecimoCollector extends SketchCollector {

    static CONFIG = {
        id: "decimo",
        name: "decimo",
        description: "i18n.collectors.decimo.description",
        version: "0",
        website: "http://www.decimo.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24465.jpg",
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
        entryUrl: "http://www.decimo.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DecimoCollector.CONFIG);
    }
}
