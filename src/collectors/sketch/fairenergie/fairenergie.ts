
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FairenergieCollector extends SketchCollector {

    static CONFIG = {
        id: "fairenergie",
        name: "FairEnergie",
        description: "i18n.collectors.fairenergie.description",
        version: "0",
        website: "https://fairenergie.emobilitycloud.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75345.jpg",
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
        loginUrl: "https://fairenergie.emobilitycloud.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FairenergieCollector.CONFIG);
    }
}
