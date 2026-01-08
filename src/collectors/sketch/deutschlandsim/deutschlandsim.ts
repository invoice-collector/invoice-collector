
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeutschlandsimCollector extends SketchCollector {

    static CONFIG = {
        id: "deutschlandsim",
        name: "DeutschlandSIM",
        description: "i18n.collectors.deutschlandsim.description",
        version: "0",
        website: "https://service.deutschlandsim.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3872.jpg",
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
        loginUrl: "https://service.deutschlandsim.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeutschlandsimCollector.CONFIG);
    }
}
