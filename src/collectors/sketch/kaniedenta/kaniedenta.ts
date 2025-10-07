
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KaniedentaCollector extends SketchCollector {

    static CONFIG = {
        id: "kaniedenta",
        name: "KANIEDENTA",
        description: "i18n.collectors.kaniedenta.description",
        version: "0",
        website: "https://www.kaniedenta.de/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/82160.jpg",
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
        entryUrl: "https://www.kaniedenta.de/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KaniedentaCollector.CONFIG);
    }
}
