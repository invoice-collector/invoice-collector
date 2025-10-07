
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IncorewebComCollector extends SketchCollector {

    static CONFIG = {
        id: "incoreweb_com",
        name: "Incoreweb.com",
        description: "i18n.collectors.incoreweb_com.description",
        version: "0",
        website: "https://www.incoreweb.com/authentification?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120487.jpg",
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
        entryUrl: "https://www.incoreweb.com/authentification?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IncorewebComCollector.CONFIG);
    }
}
