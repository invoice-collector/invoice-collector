
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EpostCaCollector extends SketchCollector {

    static CONFIG = {
        id: "epost_ca",
        name: "epost.ca",
        description: "i18n.collectors.epost_ca.description",
        version: "0",
        website: "https://www.epost.ca",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23340.jpg",
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
        loginUrl: "https://www.epost.ca",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpostCaCollector.CONFIG);
    }
}
