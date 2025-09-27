
import { SketchCollector } from '../../sketchCollector';

export class CherchonsComCollector extends SketchCollector {

    static CONFIG = {
        id: "cherchons_com",
        name: "cherchons.com",
        description: "i18n.collectors.cherchons_com.description",
        version: "0",
        website: "https://adserver.cherchons.com/cgi/adServer.cgi?service=allFacture&language=&menuSA=A",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131139.jpg",
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
        entryUrl: "https://adserver.cherchons.com/cgi/adServer.cgi?service=allFacture&language=&menuSA=A",
    }

    constructor() {
        super(CherchonsComCollector.CONFIG);
    }
}
