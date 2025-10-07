
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DokutarCollector extends SketchCollector {

    static CONFIG = {
        id: "dokutar",
        name: "Dokutar",
        description: "i18n.collectors.dokutar.description",
        version: "0",
        website: "https://www.dokutar.de/account/rechnungen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124048.jpg",
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
        entryUrl: "https://www.dokutar.de/account/rechnungen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DokutarCollector.CONFIG);
    }
}
