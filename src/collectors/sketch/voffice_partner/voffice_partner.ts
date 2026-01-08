
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VofficePartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "voffice_partner",
        name: "vOffice Partner",
        description: "i18n.collectors.voffice_partner.description",
        version: "0",
        website: "https://partner.v-office.com/partner/index?token=eyJhbGciOiJIUzI1NiJ9.eyJjaWQiOjEwNjIzMTM1LCJtaWQiOjI5MjMsInRva2VuIjpudWxsfQ.Rm5LKAcQChQKCpU9t4KxFHEcJ6mR_DpnoYZvBAKq-A0#/p_invoice?id=2774234",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727951.jpg",
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
        loginUrl: "https://partner.v-office.com/partner/index?token=eyJhbGciOiJIUzI1NiJ9.eyJjaWQiOjEwNjIzMTM1LCJtaWQiOjI5MjMsInRva2VuIjpudWxsfQ.Rm5LKAcQChQKCpU9t4KxFHEcJ6mR_DpnoYZvBAKq-A0#/p_invoice?id=2774234",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(VofficePartnerCollector.CONFIG);
    }
}
