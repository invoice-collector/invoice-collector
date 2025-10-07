
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BefeniCollector extends SketchCollector {

    static CONFIG = {
        id: "befeni",
        name: "Befeni",
        description: "i18n.collectors.befeni.description",
        version: "0",
        website: "https://www.befeni.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1037310.jpg",
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
        entryUrl: "https://www.befeni.de/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BefeniCollector.CONFIG);
    }
}
