
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FonciaCollector extends SketchCollector {

    static CONFIG = {
        id: "foncia",
        name: "Foncia",
        description: "i18n.collectors.foncia.description",
        version: "0",
        website: "https://myfoncia.fr/login ",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106541.jpg",
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
        loginUrl: "https://myfoncia.fr/login ",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FonciaCollector.CONFIG);
    }
}
