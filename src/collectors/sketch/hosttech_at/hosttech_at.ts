
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HosttechAtCollector extends SketchCollector {

    static CONFIG = {
        id: "hosttech_at",
        name: "Hosttech(.at)",
        description: "i18n.collectors.hosttech_at.description",
        version: "0",
        website: "https://www.hosttech.at/webhosting/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135100.jpg",
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
        loginUrl: "https://www.hosttech.at/webhosting/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HosttechAtCollector.CONFIG);
    }
}
