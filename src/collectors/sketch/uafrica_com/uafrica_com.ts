
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UafricaComCollector extends SketchCollector {

    static CONFIG = {
        id: "uafrica_com",
        name: "uAfrica.com",
        description: "i18n.collectors.uafrica_com.description",
        version: "0",
        website: "https://www.uafrica.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747814.jpg",
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
        entryUrl: "https://www.uafrica.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UafricaComCollector.CONFIG);
    }
}
