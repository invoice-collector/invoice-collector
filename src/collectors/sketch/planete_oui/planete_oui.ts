
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlaneteOuiCollector extends SketchCollector {

    static CONFIG = {
        id: "planete_oui",
        name: "Planete-oui",
        description: "i18n.collectors.planete_oui.description",
        version: "0",
        website: "https://www.planete-oui.fr/particuliers",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121199.jpg",
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
        entryUrl: "https://www.planete-oui.fr/particuliers",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlaneteOuiCollector.CONFIG);
    }
}
