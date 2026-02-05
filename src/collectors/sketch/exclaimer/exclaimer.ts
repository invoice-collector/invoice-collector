
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ExclaimerCollector extends SketchCollector {

    static CONFIG = {
        id: "exclaimer",
        name: "Exclaimer",
        description: "i18n.collectors.exclaimer.description",
        version: "0",
        website: "https://portal.exclaimer.com/?lang=en-TT&__hstc=35025022.3cadb767afbf989b60fc8c4b5900b99e.1523643125933.1523643125934.1523643125934.1&__hssc=35025022.1.1523643125935&__hsfp=3161351056&_ga=2.95465628.1017851034.1523643124-695165310.1523643124",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9271.jpg",
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
        loginUrl: "https://portal.exclaimer.com/?lang=en-TT&__hstc=35025022.3cadb767afbf989b60fc8c4b5900b99e.1523643125933.1523643125934.1523643125934.1&__hssc=35025022.1.1523643125935&__hsfp=3161351056&_ga=2.95465628.1017851034.1523643124-695165310.1523643124",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ExclaimerCollector.CONFIG);
    }
}
