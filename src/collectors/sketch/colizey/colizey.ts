
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ColizeyCollector extends SketchCollector {

    static CONFIG = {
        id: "colizey",
        name: "Colizey",
        description: "i18n.collectors.colizey.description",
        version: "0",
        website: "https://extranet.colizey.fr/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2046982.jpg",
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
        entryUrl: "https://extranet.colizey.fr/invoices/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ColizeyCollector.CONFIG);
    }
}
