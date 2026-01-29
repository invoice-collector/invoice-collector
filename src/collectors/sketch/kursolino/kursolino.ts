
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KursolinoCollector extends SketchCollector {

    static CONFIG = {
        id: "kursolino",
        name: "Kursolino",
        description: "i18n.collectors.kursolino.description",
        version: "0",
        website: "https://www.kursolino.de/?__cf_chl_jschl_tk__=1c0c5a14ec55a5059a6f90276522edd4ba1a9bf0-1608085229-0-AViur1XjG6N0NeabWkWPdrQj0WDi8UZrcSm3E19B_xGWzI6TiBjf5VBk8wrVRjlDI0Nx7H4W1hTLk7cyFTobnjxbqsi_BAdEGeqfyfQGVTII2Hnv5pp2_O0g8bRv5oBeKLqt3Fv3Zmq4EA4STU2XaJ4hpLX",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778196.jpg",
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
        loginUrl: "https://www.kursolino.de/?__cf_chl_jschl_tk__=1c0c5a14ec55a5059a6f90276522edd4ba1a9bf0-1608085229-0-AViur1XjG6N0NeabWkWPdrQj0WDi8UZrcSm3E19B_xGWzI6TiBjf5VBk8wrVRjlDI0Nx7H4W1hTLk7cyFTobnjxbqsi_BAdEGeqfyfQGVTII2Hnv5pp2_O0g8bRv5oBeKLqt3Fv3Zmq4EA4STU2XaJ4hpLX",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KursolinoCollector.CONFIG);
    }
}
