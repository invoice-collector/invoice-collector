
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StawagStadtwerkeAachenAgCollector extends SketchCollector {

    static CONFIG = {
        id: "stawag_stadtwerke_aachen_ag",
        name: "STAWAG (Stadtwerke Aachen AG)",
        description: "i18n.collectors.stawag_stadtwerke_aachen_ag.description",
        version: "0",
        website: "https://www.stawag.de/portal/postbox",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/781682.jpg",
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
        loginUrl: "https://www.stawag.de/portal/postbox",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StawagStadtwerkeAachenAgCollector.CONFIG);
    }
}
