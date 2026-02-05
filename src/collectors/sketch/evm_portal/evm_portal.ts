
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EvmPortalCollector extends SketchCollector {

    static CONFIG = {
        id: "evm_portal",
        name: "evm Portal",
        description: "i18n.collectors.evm_portal.description",
        version: "0",
        website: "https://onlineservice.service-rz.de/?act=login&werknr=11&stylenr=5",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75351.jpg",
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
        loginUrl: "https://onlineservice.service-rz.de/?act=login&werknr=11&stylenr=5",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EvmPortalCollector.CONFIG);
    }
}
