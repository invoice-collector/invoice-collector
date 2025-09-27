
import { SketchCollector } from '../../sketchCollector';

export class CapRechtsschutzCollector extends SketchCollector {

    static CONFIG = {
        id: "cap_rechtsschutz",
        name: "CAP Rechtsschutz",
        description: "i18n.collectors.cap_rechtsschutz.description",
        version: "0",
        website: "https://login.cap.ch/de/kundenportal/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4513652.jpg",
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
        entryUrl: "https://login.cap.ch/de/kundenportal/rechnungen",
    }

    constructor() {
        super(CapRechtsschutzCollector.CONFIG);
    }
}
