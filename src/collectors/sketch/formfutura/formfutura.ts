
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FormfuturaCollector extends SketchCollector {

    static CONFIG = {
        id: "formfutura",
        name: "Formfutura",
        description: "i18n.collectors.formfutura.description",
        version: "0",
        website: "https://formfutura.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2128531.jpg",
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
        entryUrl: "https://formfutura.com/my-account/orders/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FormfuturaCollector.CONFIG);
    }
}
