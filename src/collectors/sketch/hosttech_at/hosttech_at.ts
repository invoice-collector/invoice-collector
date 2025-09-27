
import { SketchCollector } from '../../sketchCollector';

export class HosttechAtCollector extends SketchCollector {

    static CONFIG = {
        id: "hosttech_at",
        name: "Hosttech(.at)",
        description: "i18n.collectors.hosttech_at.description",
        version: "0",
        website: "https://www.hosttech.at/webhosting/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135100.jpg",
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
        entryUrl: "https://www.hosttech.at/webhosting/",
    }

    constructor() {
        super(HosttechAtCollector.CONFIG);
    }
}
