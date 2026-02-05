
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KreiswerkeMainKinzigCollector extends SketchCollector {

    static CONFIG = {
        id: "kreiswerke_main_kinzig",
        name: "Kreiswerke Main-Kinzig",
        description: "i18n.collectors.kreiswerke_main_kinzig.description",
        version: "0",
        website: "https://www.kreiswerke-main-kinzig.de/kundenportal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1153558.jpg",
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
        loginUrl: "https://www.kreiswerke-main-kinzig.de/kundenportal/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KreiswerkeMainKinzigCollector.CONFIG);
    }
}
