
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class YuccanleadCollector extends SketchCollector {

    static CONFIG = {
        id: "yuccanlead",
        name: "YuccanLead",
        description: "i18n.collectors.yuccanlead.description",
        version: "0",
        website: "https://www.yuccanlead.com/webapp/leads/pay/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445826.jpg",
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
        loginUrl: "https://www.yuccanlead.com/webapp/leads/pay/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(YuccanleadCollector.CONFIG);
    }
}
