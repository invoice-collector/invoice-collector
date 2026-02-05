
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VolkswagenNaturstromCollector extends SketchCollector {

    static CONFIG = {
        id: "volkswagen_naturstrom",
        name: "Volkswagen Naturstrom",
        description: "i18n.collectors.volkswagen_naturstrom.description",
        version: "0",
        website: "https://naturstrom.elli.eco/kundenportal/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192497.jpg",
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
        loginUrl: "https://naturstrom.elli.eco/kundenportal/exec/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VolkswagenNaturstromCollector.CONFIG);
    }
}
