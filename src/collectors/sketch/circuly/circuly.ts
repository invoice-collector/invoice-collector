
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CirculyCollector extends SketchCollector {

    static CONFIG = {
        id: "circuly",
        name: "Circuly",
        description: "i18n.collectors.circuly.description",
        version: "0",
        website: "https://app.circuly.io/cms/invoices?page=1&per_page=10&sort=created_at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1428794.jpg",
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
        loginUrl: "https://app.circuly.io/cms/invoices?page=1&per_page=10&sort=created_at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CirculyCollector.CONFIG);
    }
}
