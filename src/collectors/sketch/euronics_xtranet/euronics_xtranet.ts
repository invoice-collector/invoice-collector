
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EuronicsXtranetCollector extends SketchCollector {

    static CONFIG = {
        id: "euronics_xtranet",
        name: "Euronics Xtranet",
        description: "i18n.collectors.euronics_xtranet.description",
        version: "0",
        website: "https://xtranet.euronics.de/code/main.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/215170.jpg",
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
        loginUrl: "https://xtranet.euronics.de/code/main.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EuronicsXtranetCollector.CONFIG);
    }
}
