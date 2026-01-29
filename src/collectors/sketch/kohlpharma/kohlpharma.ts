
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KohlpharmaCollector extends SketchCollector {

    static CONFIG = {
        id: "kohlpharma",
        name: "Kohlpharma",
        description: "i18n.collectors.kohlpharma.description",
        version: "0",
        website: "https://kundenportal.kohlpharma.com/PIDocument/Document/DocumentOverview?isDirectCall=False",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2445820.jpg",
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
        loginUrl: "https://kundenportal.kohlpharma.com/PIDocument/Document/DocumentOverview?isDirectCall=False",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KohlpharmaCollector.CONFIG);
    }
}
