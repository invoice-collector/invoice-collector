
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IntercarsDeutschlandGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "intercars_deutschland_gmbh",
        name: "InterCars Deutschland GmbH",
        description: "i18n.collectors.intercars_deutschland_gmbh.description",
        version: "0",
        website: "https://sso.intercars.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3022356.jpg",
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
        loginUrl: "https://sso.intercars.eu/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IntercarsDeutschlandGmbhCollector.CONFIG);
    }
}
