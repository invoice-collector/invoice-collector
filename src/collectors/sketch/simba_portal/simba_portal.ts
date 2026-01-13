
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SimbaPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "simba_portal",
        name: "Simba Portal",
        description: "i18n.collectors.simba_portal.description",
        version: "0",
        website: "https://portal.simba.de/mandant/login#!auswertungen-mandant-select",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1383482.jpg",
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
        loginUrl: "https://portal.simba.de/mandant/login#!auswertungen-mandant-select",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SimbaPortalCollector.CONFIG);
    }
}
