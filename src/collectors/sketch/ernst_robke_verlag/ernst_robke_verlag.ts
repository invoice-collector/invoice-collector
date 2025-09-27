
import { SketchCollector } from '../../sketchCollector';

export class ErnstRobkeVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "ernst_robke_verlag",
        name: "Ernst Robke Verlag",
        description: "i18n.collectors.ernst_robke_verlag.description",
        version: "0",
        website: "https://portal.erv-online.de/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60838.jpg",
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
        entryUrl: "https://portal.erv-online.de/login.html",
    }

    constructor() {
        super(ErnstRobkeVerlagCollector.CONFIG);
    }
}
