
import { SketchCollector } from '../../sketchCollector';

export class AltusIoCollector extends SketchCollector {

    static CONFIG = {
        id: "altus_io",
        name: "Altus.io",
        description: "i18n.collectors.altus_io.description",
        version: "0",
        website: "https://app.opteo.com/app/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7125.jpg",
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
        entryUrl: "https://app.opteo.com/app/#/login",
    }

    constructor() {
        super(AltusIoCollector.CONFIG);
    }
}
