
import { SketchCollector } from '../../sketchCollector';

export class SidnCollector extends SketchCollector {

    static CONFIG = {
        id: "sidn",
        name: "SIDN",
        description: "i18n.collectors.sidn.description",
        version: "0",
        website: "https://registrars.sidn.nl/?language_id=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32574.jpg",
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
        entryUrl: "https://registrars.sidn.nl/?language_id=1",
    }

    constructor() {
        super(SidnCollector.CONFIG);
    }
}
