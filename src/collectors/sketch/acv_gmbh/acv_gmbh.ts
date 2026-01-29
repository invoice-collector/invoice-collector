
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AcvGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "acv_gmbh",
        name: "acv GmbH",
        description: "i18n.collectors.acv_gmbh.description",
        version: "0",
        website: "https://shop.acvgmbh.de/de/kundencenter/rechnungen.html?&_date=1705273200",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728472.jpg",
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
        loginUrl: "https://shop.acvgmbh.de/de/kundencenter/rechnungen.html?&_date=1705273200",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AcvGmbhCollector.CONFIG);
    }
}
