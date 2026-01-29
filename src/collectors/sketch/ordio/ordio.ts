
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OrdioCollector extends SketchCollector {

    static CONFIG = {
        id: "ordio",
        name: "Ordio",
        description: "i18n.collectors.ordio.description",
        version: "0",
        website: "https://dritterort.ordio.com/schedule/plan/#/2157/settings/payment",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2246694.jpg",
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
        loginUrl: "https://dritterort.ordio.com/schedule/plan/#/2157/settings/payment",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OrdioCollector.CONFIG);
    }
}
