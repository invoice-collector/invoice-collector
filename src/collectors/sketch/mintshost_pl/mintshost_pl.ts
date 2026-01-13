
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MintshostPlCollector extends SketchCollector {

    static CONFIG = {
        id: "mintshost_pl",
        name: "Mintshost.pl",
        description: "i18n.collectors.mintshost_pl.description",
        version: "0",
        website: "https://mintshost.pl/start/panel/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8740.jpg",
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
        loginUrl: "https://mintshost.pl/start/panel/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MintshostPlCollector.CONFIG);
    }
}
