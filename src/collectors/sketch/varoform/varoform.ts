import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class VaroformCollector extends SketchCollector {

    static CONFIG = {
        id: "varoform",
        name: "Varoform",
        description: "i18n.collectors.varoform.description",
        version: "0",
        website: "https://www.varoform.com",
        logo: "https://www.varoform.com/wp-content/uploads/2020/07/logo-Varo-4.png",
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
        super(VaroformCollector.CONFIG);
    }
}
