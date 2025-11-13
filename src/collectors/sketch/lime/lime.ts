import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LimeCollector extends SketchCollector {

    static CONFIG = {
        id: "lime",
        name: "Lime",
        description: "i18n.collectors.lime.description",
        version: "0",
        website: "https://www.li.me",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Lime_%28transportation_company%29_logo.svg",
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
        super(LimeCollector.CONFIG);
    }
}
