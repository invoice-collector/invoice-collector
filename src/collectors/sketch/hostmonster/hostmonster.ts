
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HostmonsterCollector extends SketchCollector {

    static CONFIG = {
        id: "hostmonster",
        name: "HostMonster",
        description: "i18n.collectors.hostmonster.description",
        version: "0",
        website: "https://my.hostmonster.com/web-hosting/cplogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9494.jpg",
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
        loginUrl: "https://my.hostmonster.com/web-hosting/cplogin",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HostmonsterCollector.CONFIG);
    }
}
