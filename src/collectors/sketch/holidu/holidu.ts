
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HoliduCollector extends SketchCollector {

    static CONFIG = {
        id: "holidu",
        name: "Holidu",
        description: "i18n.collectors.holidu.description",
        version: "0",
        website: "https://host.holidu.com/app/profile/invoices?pageNum=0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2419777.jpg",
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
        loginUrl: "https://host.holidu.com/app/profile/invoices?pageNum=0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HoliduCollector.CONFIG);
    }
}
