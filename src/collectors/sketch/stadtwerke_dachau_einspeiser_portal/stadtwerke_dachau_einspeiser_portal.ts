
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeDachauEinspeiserPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_dachau_einspeiser_portal",
        name: "Stadtwerke Dachau Einspeiser Portal",
        description: "i18n.collectors.stadtwerke_dachau_einspeiser_portal.description",
        version: "0",
        website: "https://www.stadtwerke-dachau.de/service-beratung/online-services/einspeiser-portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2842115.jpg",
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
        loginUrl: "https://www.stadtwerke-dachau.de/service-beratung/online-services/einspeiser-portal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeDachauEinspeiserPortalCollector.CONFIG);
    }
}
