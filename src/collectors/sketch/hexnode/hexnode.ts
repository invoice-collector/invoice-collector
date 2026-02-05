
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HexnodeCollector extends SketchCollector {

    static CONFIG = {
        id: "hexnode",
        name: "Hexnode",
        description: "i18n.collectors.hexnode.description",
        version: "0",
        website: "https://bitwip.hexnodemdm.com/subscribe/#/reciepts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777992.jpg",
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
        loginUrl: "https://bitwip.hexnodemdm.com/subscribe/#/reciepts",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HexnodeCollector.CONFIG);
    }
}
