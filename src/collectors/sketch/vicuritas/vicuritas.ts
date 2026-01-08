
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VicuritasCollector extends SketchCollector {

    static CONFIG = {
        id: "vicuritas",
        name: "Vicuritas",
        description: "i18n.collectors.vicuritas.description",
        version: "0",
        website: "https://vicuritas.onlinesuite.de/volz_main/myvast-vo/office/user_detail.php?akt=doc&bid=2220580",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409680.jpg",
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
        loginUrl: "https://vicuritas.onlinesuite.de/volz_main/myvast-vo/office/user_detail.php?akt=doc&bid=2220580",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VicuritasCollector.CONFIG);
    }
}
