
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EasyscanDentalUnionCollector extends SketchCollector {

    static CONFIG = {
        id: "easyscan_dental_union",
        name: "Easyscan DENTAL UNION",
        description: "i18n.collectors.easyscan_dental_union.description",
        version: "0",
        website: "https://easyscan.dental-union.de/index.php/locale:de_DE/archive",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1210675.jpg",
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
        loginUrl: "https://easyscan.dental-union.de/index.php/locale:de_DE/archive",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EasyscanDentalUnionCollector.CONFIG);
    }
}
