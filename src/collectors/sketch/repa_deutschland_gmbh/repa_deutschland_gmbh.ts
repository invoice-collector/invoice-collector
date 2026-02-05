
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RepaDeutschlandGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "repa_deutschland_gmbh",
        name: "REPA Deutschland GmbH",
        description: "i18n.collectors.repa_deutschland_gmbh.description",
        version: "0",
        website: "https://www.gev-online.com/webshop/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2038748.jpg",
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
        loginUrl: "https://www.gev-online.com/webshop/account/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RepaDeutschlandGmbhCollector.CONFIG);
    }
}
