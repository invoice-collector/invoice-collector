
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StadtwerkeDelmenhorstCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_delmenhorst",
        name: "Stadtwerke Delmenhorst",
        description: "i18n.collectors.stadtwerke_delmenhorst.description",
        version: "0",
        website: "https://kundenportal.swd-del.de/BK/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121198.jpg",
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
        loginUrl: "https://kundenportal.swd-del.de/BK/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StadtwerkeDelmenhorstCollector.CONFIG);
    }
}
