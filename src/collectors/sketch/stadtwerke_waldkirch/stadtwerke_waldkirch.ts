
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeWaldkirchCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_waldkirch",
        name: "Stadtwerke Waldkirch",
        description: "i18n.collectors.stadtwerke_waldkirch.description",
        version: "0",
        website: "https://kundenportal.sw-waldkirch.de/service/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2180697.jpg",
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
        loginUrl: "https://kundenportal.sw-waldkirch.de/service/exec/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeWaldkirchCollector.CONFIG);
    }
}
