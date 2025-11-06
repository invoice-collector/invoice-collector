import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WebadorCollector extends SketchCollector {

    static CONFIG = {
        id: "webador",
        name: "Webador",
        description: "i18n.collectors.webador.description",
        version: "0",
        website: "https://www.webador.fr",
        logo: "https://assets.jwwb.nl/assets/brand/webador/logo/logo-dark.svg",
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WebadorCollector.CONFIG);
    }
}
