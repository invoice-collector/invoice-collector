
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FreenomComCollector extends SketchCollector {

    static CONFIG = {
        id: "freenom_com",
        name: "freenom.com",
        description: "i18n.collectors.freenom_com.description",
        version: "0",
        website: "https://my.freenom.com/clientarea.php?action=invoices&language=english",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/409688.jpg",
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
        loginUrl: "https://my.freenom.com/clientarea.php?action=invoices&language=english",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FreenomComCollector.CONFIG);
    }
}
