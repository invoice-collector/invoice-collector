
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AutomobilwocheCollector extends SketchCollector {

    static CONFIG = {
        id: "automobilwoche",
        name: "Automobilwoche",
        description: "i18n.collectors.automobilwoche.description",
        version: "0",
        website: "https://www.automobilwoche.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3019983.jpg",
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
        entryUrl: "https://www.automobilwoche.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutomobilwocheCollector.CONFIG);
    }
}
