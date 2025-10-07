
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoltersKluwerNederlandCollector extends SketchCollector {

    static CONFIG = {
        id: "wolters_kluwer_nederland",
        name: "Wolters Kluwer - Nederland",
        description: "i18n.collectors.wolters_kluwer_nederland.description",
        version: "0",
        website: "https://www.wolterskluwer.nl/inloggen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32346.jpg",
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
        entryUrl: "https://www.wolterskluwer.nl/inloggen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoltersKluwerNederlandCollector.CONFIG);
    }
}
