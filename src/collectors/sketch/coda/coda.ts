
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CodaCollector extends SketchCollector {

    static CONFIG = {
        id: "coda",
        name: "Coda",
        description: "i18n.collectors.coda.description",
        version: "0",
        website: "https://coda.io/workspaces/ws-i9PtJ5ah-1?selectedTab=Billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/664236.jpg",
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
        loginUrl: "https://coda.io/workspaces/ws-i9PtJ5ah-1?selectedTab=Billing",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CodaCollector.CONFIG);
    }
}
