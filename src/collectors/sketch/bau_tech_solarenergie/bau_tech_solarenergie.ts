
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BauTechSolarenergieCollector extends SketchCollector {

    static CONFIG = {
        id: "bau_tech_solarenergie",
        name: "Bau-Tech Solarenergie",
        description: "i18n.collectors.bau_tech_solarenergie.description",
        version: "0",
        website: "https://www.bau-tech.shop/customer",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248103.jpg",
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
        loginUrl: "https://www.bau-tech.shop/customer",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BauTechSolarenergieCollector.CONFIG);
    }
}
