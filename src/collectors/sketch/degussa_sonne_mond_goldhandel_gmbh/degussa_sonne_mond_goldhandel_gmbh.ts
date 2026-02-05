
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DegussaSonneMondGoldhandelGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "degussa_sonne_mond_goldhandel_gmbh",
        name: "DEGUSSA SONNE/MOND GOLDHANDEL GMBH",
        description: "i18n.collectors.degussa_sonne_mond_goldhandel_gmbh.description",
        version: "0",
        website: "https://www.degussa-goldankauf.de/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1207817.jpg",
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
        loginUrl: "https://www.degussa-goldankauf.de/customer/account/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DegussaSonneMondGoldhandelGmbhCollector.CONFIG);
    }
}
