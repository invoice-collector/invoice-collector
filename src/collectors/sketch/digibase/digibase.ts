
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DigibaseCollector extends SketchCollector {

    static CONFIG = {
        id: "digibase",
        name: "digibase",
        description: "i18n.collectors.digibase.description",
        version: "0",
        website: "https://www.digibase.com/dashboard/organizations/1845813",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391935.jpg",
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
        loginUrl: "https://www.digibase.com/dashboard/organizations/1845813",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DigibaseCollector.CONFIG);
    }
}
