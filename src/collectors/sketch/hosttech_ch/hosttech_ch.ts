
import { SketchCollector } from '../../sketchCollector';

export class HosttechChCollector extends SketchCollector {

    static CONFIG = {
        id: "hosttech_ch",
        name: "Hosttech(.ch)",
        description: "i18n.collectors.hosttech_ch.description",
        version: "0",
        website: "https://www.hosttech.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170846.jpg",
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
        entryUrl: "https://www.hosttech.ch/",
    }

    constructor() {
        super(HosttechChCollector.CONFIG);
    }
}
