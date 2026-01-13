
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrivatePackagistCollector extends SketchCollector {

    static CONFIG = {
        id: "private_packagist",
        name: "Private Packagist",
        description: "i18n.collectors.private_packagist.description",
        version: "0",
        website: "https://packagist.com/orgs/immerce/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2203309.jpg",
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
        loginUrl: "https://packagist.com/orgs/immerce/billing/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PrivatePackagistCollector.CONFIG);
    }
}
