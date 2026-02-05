
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FibwiCollector extends SketchCollector {

    static CONFIG = {
        id: "fibwi",
        name: "Fibwi",
        description: "i18n.collectors.fibwi.description",
        version: "0",
        website: "https://clientes.fibwi.com/panelClientes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/741159.jpg",
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
        loginUrl: "https://clientes.fibwi.com/panelClientes",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FibwiCollector.CONFIG);
    }
}
