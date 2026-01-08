
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InspireNetNzCollector extends SketchCollector {

    static CONFIG = {
        id: "inspire_net_nz",
        name: "Inspire.net.nz",
        description: "i18n.collectors.inspire_net_nz.description",
        version: "0",
        website: "http://www.inspire.net.nz",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8934.jpg",
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
        loginUrl: "http://www.inspire.net.nz",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InspireNetNzCollector.CONFIG);
    }
}
