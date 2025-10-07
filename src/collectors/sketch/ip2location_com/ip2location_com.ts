
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Ip2locationComCollector extends SketchCollector {

    static CONFIG = {
        id: "ip2location_com",
        name: "IP2Location.com",
        description: "i18n.collectors.ip2location_com.description",
        version: "0",
        website: "https://www.ip2location.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34068.jpg",
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
        entryUrl: "https://www.ip2location.com/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Ip2locationComCollector.CONFIG);
    }
}
