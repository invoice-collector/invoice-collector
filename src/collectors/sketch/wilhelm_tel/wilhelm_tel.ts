
import { SketchCollector } from '../../sketchCollector';

export class WilhelmTelCollector extends SketchCollector {

    static CONFIG = {
        id: "wilhelm_tel",
        name: "wilhelm.tel",
        description: "i18n.collectors.wilhelm_tel.description",
        version: "0",
        website: "https://portal.wtnet.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10067.jpg",
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
        entryUrl: "https://portal.wtnet.de/",
    }

    constructor() {
        super(WilhelmTelCollector.CONFIG);
    }
}
