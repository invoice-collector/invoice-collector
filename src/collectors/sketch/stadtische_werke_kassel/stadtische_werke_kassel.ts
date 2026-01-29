
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtischeWerkeKasselCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtische_werke_kassel",
        name: "Stadtische Werke Kassel",
        description: "i18n.collectors.stadtische_werke_kassel.description",
        version: "0",
        website: "https://kundenportal.sw-kassel.de/portal/welcome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/423630.jpg",
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
        loginUrl: "https://kundenportal.sw-kassel.de/portal/welcome",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtischeWerkeKasselCollector.CONFIG);
    }
}
