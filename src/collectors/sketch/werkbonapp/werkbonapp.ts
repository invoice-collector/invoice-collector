
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WerkbonappCollector extends SketchCollector {

    static CONFIG = {
        id: "werkbonapp",
        name: "WerkbonApp",
        description: "i18n.collectors.werkbonapp.description",
        version: "0",
        website: "https://www.werkbonapp.nl/mijn-account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33388.jpg",
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
        entryUrl: "https://www.werkbonapp.nl/mijn-account/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WerkbonappCollector.CONFIG);
    }
}
