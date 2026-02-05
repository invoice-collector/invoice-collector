
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EFactFacNissanCollector extends SketchCollector {

    static CONFIG = {
        id: "e_fact_fac_nissan",
        name: "e-fact- Fac NISSAN",
        description: "i18n.collectors.e_fact_fac_nissan.description",
        version: "0",
        website: "https://private.cegedim-demat.com/gis-frontoffice/home.do?mdpreset=ok",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060695.jpg",
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
        loginUrl: "https://private.cegedim-demat.com/gis-frontoffice/home.do?mdpreset=ok",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EFactFacNissanCollector.CONFIG);
    }
}
