import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlanywayCollector extends SketchCollector {

    static CONFIG = {
        id: "planyway",
        name: "Planyway",
        description: "i18n.collectors.planyway.description",
        version: "0",
        website: "https://planyway.com",
        logo: "https://files.planyway.com/assets/3.2.82/img/planyway_logo.svg",
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
        super(PlanywayCollector.CONFIG);
    }
}
