
import { SketchCollector } from '../../sketchCollector';

export class TelkomCollector extends SketchCollector {

    static CONFIG = {
        id: "telkom",
        name: "Telkom",
        description: "i18n.collectors.telkom.description",
        version: "0",
        website: "https://www.telkom.co.za/today/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/398381.jpg",
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
        entryUrl: "https://www.telkom.co.za/today/",
    }

    constructor() {
        super(TelkomCollector.CONFIG);
    }
}
