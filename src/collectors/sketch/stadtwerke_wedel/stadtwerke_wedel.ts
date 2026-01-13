
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeWedelCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_wedel",
        name: "Stadtwerke Wedel",
        description: "i18n.collectors.stadtwerke_wedel.description",
        version: "0",
        website: "https://portal.stadtwerke-wedel.de/kundenportal/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9227.jpg",
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
        loginUrl: "https://portal.stadtwerke-wedel.de/kundenportal/exec/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StadtwerkeWedelCollector.CONFIG);
    }
}
