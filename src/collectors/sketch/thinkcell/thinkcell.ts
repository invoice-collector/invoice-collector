
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ThinkcellCollector extends SketchCollector {

    static CONFIG = {
        id: "thinkcell",
        name: "ThinkCell",
        description: "i18n.collectors.thinkcell.description",
        version: "0",
        website: "https://server.think-cell.com/portal/en/licenses.srf",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111489.jpg",
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
        loginUrl: "https://server.think-cell.com/portal/en/licenses.srf",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ThinkcellCollector.CONFIG);
    }
}
