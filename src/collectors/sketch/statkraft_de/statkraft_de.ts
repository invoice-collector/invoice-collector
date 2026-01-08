
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StatkraftDeCollector extends SketchCollector {

    static CONFIG = {
        id: "statkraft_de",
        name: "Statkraft.de",
        description: "i18n.collectors.statkraft_de.description",
        version: "0",
        website: "https://kundenportal.statkraft.de/portal/documents?filter-anlage%5B0%5D=3160&filter-anlage%5B1%5D=3206",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63500.jpg",
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
        loginUrl: "https://kundenportal.statkraft.de/portal/documents?filter-anlage%5B0%5D=3160&filter-anlage%5B1%5D=3206",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StatkraftDeCollector.CONFIG);
    }
}
