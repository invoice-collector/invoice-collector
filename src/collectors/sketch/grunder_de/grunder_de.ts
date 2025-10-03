
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrunderDeCollector extends SketchCollector {

    static CONFIG = {
        id: "grunder_de",
        name: "Grunder.de",
        description: "i18n.collectors.grunder_de.description",
        version: "0",
        website: "https://mitglieder.gruender.de/mein-konto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2765220.jpg",
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
        entryUrl: "https://mitglieder.gruender.de/mein-konto/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrunderDeCollector.CONFIG);
    }
}
