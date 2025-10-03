
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PromodCollector extends SketchCollector {

    static CONFIG = {
        id: "promod",
        name: "Promod",
        description: "i18n.collectors.promod.description",
        version: "0",
        website: "https://www.promod.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122732.jpg",
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
        entryUrl: "https://www.promod.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PromodCollector.CONFIG);
    }
}
