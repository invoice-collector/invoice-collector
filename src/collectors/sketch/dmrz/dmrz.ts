
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DmrzCollector extends SketchCollector {

    static CONFIG = {
        id: "dmrz",
        name: "DMRZ",
        description: "i18n.collectors.dmrz.description",
        version: "0",
        website: "https://ww18.autotask.net/ClientPortal/LandingPage/LandingPage.aspx?fromLogin=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/832492.jpg",
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
        loginUrl: "https://ww18.autotask.net/ClientPortal/LandingPage/LandingPage.aspx?fromLogin=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DmrzCollector.CONFIG);
    }
}
