
import { SketchCollector } from '../../sketchCollector';

export class HostEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "host_europe",
        name: "Host Europe",
        description: "i18n.collectors.host_europe.description",
        version: "0",
        website: "https://sso.hosteurope.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097927.jpg",
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
        entryUrl: "https://sso.hosteurope.de/",
    }

    constructor() {
        super(HostEuropeCollector.CONFIG);
    }
}
