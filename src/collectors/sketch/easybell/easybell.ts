
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EasybellCollector extends SketchCollector {

    static CONFIG = {
        id: "easybell",
        name: "easybell",
        description: "i18n.collectors.easybell.description",
        version: "0",
        website: "https://login.easybell.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3932.jpg",
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
        entryUrl: "https://login.easybell.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasybellCollector.CONFIG);
    }
}
