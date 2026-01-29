
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeHildenCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_hilden",
        name: "Stadtwerke Hilden",
        description: "i18n.collectors.stadtwerke_hilden.description",
        version: "0",
        website: "https://kundenportal.stadtwerke-hilden.de/csit/action/csStart",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417168.jpg",
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
        loginUrl: "https://kundenportal.stadtwerke-hilden.de/csit/action/csStart",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeHildenCollector.CONFIG);
    }
}
