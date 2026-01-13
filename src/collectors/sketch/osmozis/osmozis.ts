
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OsmozisCollector extends SketchCollector {

    static CONFIG = {
        id: "osmozis",
        name: "Osmozis",
        description: "i18n.collectors.osmozis.description",
        version: "0",
        website: "https://console.osmozis.com/fr/cccfc8ce9c/inc_invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746547.jpg",
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
        loginUrl: "https://console.osmozis.com/fr/cccfc8ce9c/inc_invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OsmozisCollector.CONFIG);
    }
}
