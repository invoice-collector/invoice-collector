
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoolsafetyCollector extends SketchCollector {

    static CONFIG = {
        id: "coolsafety",
        name: "CoolSafety",
        description: "i18n.collectors.coolsafety.description",
        version: "0",
        website: "https://coolsafety.nl/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32488.jpg",
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
        entryUrl: "https://coolsafety.nl/login.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoolsafetyCollector.CONFIG);
    }
}
