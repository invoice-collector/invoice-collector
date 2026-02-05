
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkePforzheimCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_pforzheim",
        name: "Stadtwerke Pforzheim",
        description: "i18n.collectors.stadtwerke_pforzheim.description",
        version: "0",
        website: "https://portal.stadtwerke-pforzheim.de/powercommerce/swph/fo/portal/start",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2584142.jpg",
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
        loginUrl: "https://portal.stadtwerke-pforzheim.de/powercommerce/swph/fo/portal/start",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkePforzheimCollector.CONFIG);
    }
}
