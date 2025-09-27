
import { SketchCollector } from '../../sketchCollector';

export class AirwireCollector extends SketchCollector {

    static CONFIG = {
        id: "airwire",
        name: "airwire",
        description: "i18n.collectors.airwire.description",
        version: "0",
        website: "http://www.airwire.ie",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/89497.jpg",
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
        entryUrl: "http://www.airwire.ie",
    }

    constructor() {
        super(AirwireCollector.CONFIG);
    }
}
