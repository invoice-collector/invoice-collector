
import { SketchCollector } from '../../sketchCollector';

export class GetemailIoCollector extends SketchCollector {

    static CONFIG = {
        id: "getemail_io",
        name: "Getemail.io",
        description: "i18n.collectors.getemail_io.description",
        version: "0",
        website: "https://app.getemail.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035264.jpg",
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
        entryUrl: "https://app.getemail.io/login",
    }

    constructor() {
        super(GetemailIoCollector.CONFIG);
    }
}
