
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DensysPv5GmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "densys_pv5_gmbh",
        name: "Densys pv5 GmbH",
        description: "i18n.collectors.densys_pv5_gmbh.description",
        version: "0",
        website: "https://densys-pv5.de/Account/Orders.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1368228.jpg",
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
        loginUrl: "https://densys-pv5.de/Account/Orders.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DensysPv5GmbhCollector.CONFIG);
    }
}
