
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SidexaCollector extends SketchCollector {

    static CONFIG = {
        id: "sidexa",
        name: "Sidexa",
        description: "i18n.collectors.sidexa.description",
        version: "0",
        website: "https://services.sidexa.fr/fr/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4192414.jpg",
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
        entryUrl: "https://services.sidexa.fr/fr/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SidexaCollector.CONFIG);
    }
}
