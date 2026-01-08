
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SodexoServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "sodexo_services",
        name: "Sodexo services",
        description: "i18n.collectors.sodexo_services.description",
        version: "0",
        website: "https://essen-bei-sodexo.de/mein-essen.html#/login//plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27118.jpg",
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
        loginUrl: "https://essen-bei-sodexo.de/mein-essen.html#/login//plan",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SodexoServicesCollector.CONFIG);
    }
}
