
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PsychzNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "psychz_networks",
        name: "Psychz Networks",
        description: "i18n.collectors.psychz_networks.description",
        version: "0",
        website: "https://www.psychz.net/dashboard/client/web/site/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106322.jpg",
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
        loginUrl: "https://www.psychz.net/dashboard/client/web/site/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PsychzNetworksCollector.CONFIG);
    }
}
