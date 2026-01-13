
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnviamGeschaeftskundenCollector extends SketchCollector {

    static CONFIG = {
        id: "enviam_geschaeftskunden",
        name: "enviam Geschaeftskunden",
        description: "i18n.collectors.enviam_geschaeftskunden.description",
        version: "0",
        website: "https://kundenportal.enviam.de/powercommerce/envia/fo/portal/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/962392.jpg",
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
        loginUrl: "https://kundenportal.enviam.de/powercommerce/envia/fo/portal/invoice",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnviamGeschaeftskundenCollector.CONFIG);
    }
}
