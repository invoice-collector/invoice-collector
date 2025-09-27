
import { SketchCollector } from '../../sketchCollector';

export class SanacorpConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "sanacorp_connect",
        name: "Sanacorp-Connect",
        description: "i18n.collectors.sanacorp_connect.description",
        version: "0",
        website: "https://connect.sanacorp.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1340281.jpg",
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
        entryUrl: "https://connect.sanacorp.de/login",
    }

    constructor() {
        super(SanacorpConnectCollector.CONFIG);
    }
}
