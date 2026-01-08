
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TealNetworksCollector extends SketchCollector {

    static CONFIG = {
        id: "teal_networks",
        name: "Teal Networks",
        description: "i18n.collectors.teal_networks.description",
        version: "0",
        website: "https://tealnetworks.freshbooks.com/showStatement",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/76576.jpg",
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
        loginUrl: "https://tealnetworks.freshbooks.com/showStatement",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TealNetworksCollector.CONFIG);
    }
}
