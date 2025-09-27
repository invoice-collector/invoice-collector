
import { SketchCollector } from '../../sketchCollector';

export class ZeitIoCollector extends SketchCollector {

    static CONFIG = {
        id: "zeit_io",
        name: "ZEIT.IO",
        description: "i18n.collectors.zeit_io.description",
        version: "0",
        website: "https://zeit.io/de/credit_notes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1316256.jpg",
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
        entryUrl: "https://zeit.io/de/credit_notes",
    }

    constructor() {
        super(ZeitIoCollector.CONFIG);
    }
}
