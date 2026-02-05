
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NachtUndNotdienstfondCollector extends SketchCollector {

    static CONFIG = {
        id: "nacht_und_notdienstfond",
        name: "Nacht und Notdienstfond",
        description: "i18n.collectors.nacht_und_notdienstfond.description",
        version: "0",
        website: "www.dav-notdienstfonds.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1232581.jpg",
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
        loginUrl: "www.dav-notdienstfonds.de/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NachtUndNotdienstfondCollector.CONFIG);
    }
}
