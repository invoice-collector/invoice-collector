
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PackagecloudCollector extends SketchCollector {

    static CONFIG = {
        id: "packagecloud",
        name: "packagecloud",
        description: "i18n.collectors.packagecloud.description",
        version: "0",
        website: "https://packagecloud.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25203.jpg",
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
        loginUrl: "https://packagecloud.io/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PackagecloudCollector.CONFIG);
    }
}
