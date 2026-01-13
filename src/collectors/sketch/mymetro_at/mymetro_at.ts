
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MymetroAtCollector extends SketchCollector {

    static CONFIG = {
        id: "mymetro_at",
        name: "myMetro.at",
        description: "i18n.collectors.mymetro_at.description",
        version: "0",
        website: "https://mymetro.at/Invoices/10097842",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776024.jpg",
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
        loginUrl: "https://mymetro.at/Invoices/10097842",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MymetroAtCollector.CONFIG);
    }
}
