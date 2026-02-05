
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConstantContactCollector extends SketchCollector {

    static CONFIG = {
        id: "constant_contact",
        name: "Constant Contact",
        description: "i18n.collectors.constant_contact.description",
        version: "0",
        website: "https://login.constantcontact.com/login/login.sdo?goto=https%3A%2F%2Fwww.constantcontact.com%2Fprocessing_login.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8811.jpg",
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
        loginUrl: "https://login.constantcontact.com/login/login.sdo?goto=https%3A%2F%2Fwww.constantcontact.com%2Fprocessing_login.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ConstantContactCollector.CONFIG);
    }
}
