
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KimaiCollector extends SketchCollector {

    static CONFIG = {
        id: "kimai",
        name: "Kimai",
        description: "i18n.collectors.kimai.description",
        version: "0",
        website: "https://www.kimai.cloud/de/my/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727889.jpg",
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
        loginUrl: "https://www.kimai.cloud/de/my/invoices/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KimaiCollector.CONFIG);
    }
}
