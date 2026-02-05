
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MonizzeCollector extends SketchCollector {

    static CONFIG = {
        id: "monizze",
        name: "Monizze",
        description: "i18n.collectors.monizze.description",
        version: "0",
        website: "https://client.monizze.be/customer/85887/invoices/overview#page=1&sort=date_added&direction=desc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779728.jpg",
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
        loginUrl: "https://client.monizze.be/customer/85887/invoices/overview#page=1&sort=date_added&direction=desc",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MonizzeCollector.CONFIG);
    }
}
