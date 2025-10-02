
import { SketchCollector } from '../../sketchCollector';

export class IonosUkCollector extends SketchCollector {

    static CONFIG = {
        id: "ionos_uk",
        name: "Ionos (.co.uk)",
        description: "i18n.collectors.ionos_uk.description",
        version: "0",
        website: "https://login.ionos.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121683.jpg",
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
        entryUrl: "https://login.ionos.co.uk/",
    }

    constructor() {
        super(IonosUkCollector.CONFIG);
    }
}
