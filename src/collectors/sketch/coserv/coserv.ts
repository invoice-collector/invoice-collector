
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CoservCollector extends SketchCollector {

    static CONFIG = {
        id: "coserv",
        name: "CoServ",
        description: "i18n.collectors.coserv.description",
        version: "0",
        website: "https://coserv.smarthub.coop/Login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/179853.jpg",
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
        entryUrl: "https://coserv.smarthub.coop/Login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoservCollector.CONFIG);
    }
}
