
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MuttisLadenCollector extends SketchCollector {

    static CONFIG = {
        id: "muttis_laden",
        name: "Muttis-Laden",
        description: "i18n.collectors.muttis_laden.description",
        version: "0",
        website: "https://muttis-laden.de/LogIn.action",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210952.jpg",
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
        entryUrl: "https://muttis-laden.de/LogIn.action",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MuttisLadenCollector.CONFIG);
    }
}
