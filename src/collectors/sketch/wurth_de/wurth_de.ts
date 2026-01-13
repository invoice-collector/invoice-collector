
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WurthDeCollector extends SketchCollector {

    static CONFIG = {
        id: "wurth_de",
        name: "Wurth (.de)",
        description: "i18n.collectors.wurth.description",
        version: "1",
        website: "https://eshop.wuerth.de",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/W%C3%BCrth_logo.svg",
        type: CollectorType.SKETCH,
        params: {
            client_id: {
                type: "string",
                name: "i18n.collectors.wurth.client_id",
                placeholder: "i18n.collectors.wurth.client_id.placeholder",
                mandatory: true
            },
            login: {
                type: "string",
                name: "i18n.collectors.wurth.login",
                placeholder: "i18n.collectors.wurth.login.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://eshop.wuerth.de/de/DE/EUR/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WurthDeCollector.CONFIG);
    }
}
