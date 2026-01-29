
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EvboxCollector extends SketchCollector {

    static CONFIG = {
        id: "evbox",
        name: "EVBox",
        description: "i18n.collectors.evbox.description",
        version: "0",
        website: "https://backoffice.ev-box.com/Account/Login.aspx?ReturnUrl=%2f%3f__hstc%3d187773815.d90adcba4136f4f16c96b7c4541d923f.1524058306673.1524058306673.1524058306673.1%26__hssc%3d187773815.1.1524058306674%26__hsfp%3d3161351056&__hstc=187773815.d90adcba4136f4f16c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32289.jpg",
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
        loginUrl: "https://backoffice.ev-box.com/Account/Login.aspx?ReturnUrl=%2f%3f__hstc%3d187773815.d90adcba4136f4f16c96b7c4541d923f.1524058306673.1524058306673.1524058306673.1%26__hssc%3d187773815.1.1524058306674%26__hsfp%3d3161351056&__hstc=187773815.d90adcba4136f4f16c",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EvboxCollector.CONFIG);
    }
}
