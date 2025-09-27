
import { SketchCollector } from '../../sketchCollector';

export class I4wifiCollector extends SketchCollector {

    static CONFIG = {
        id: "i4wifi",
        name: "i4wifi",
        description: "i18n.collectors.i4wifi.description",
        version: "0",
        website: "https://www.i4wifi.eu/en/faktury",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4202840.jpg",
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
        entryUrl: "https://www.i4wifi.eu/en/faktury",
    }

    constructor() {
        super(I4wifiCollector.CONFIG);
    }
}
