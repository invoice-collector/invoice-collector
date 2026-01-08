import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RedBySfrCollector extends SketchCollector {

    static CONFIG = {
        id: "red_by_sfr",
        name: "Red by SFR",
        description: "i18n.collectors.red_by_sfr.description",
        version: "0",
        website: "https://red-by-sfr.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/6/6f/Logo_Red_By_SFR_2016.svg",
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
        loginUrl: "https://www.red-by-sfr.fr/mon-espace-client/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RedBySfrCollector.CONFIG);
    }
}
