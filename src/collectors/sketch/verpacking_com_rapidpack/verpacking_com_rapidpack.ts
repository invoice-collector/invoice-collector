
import { SketchCollector } from '../../sketchCollector';

export class VerpackingComRapidpackCollector extends SketchCollector {

    static CONFIG = {
        id: "verpacking_com_rapidpack",
        name: "verpacking.com/Rapidpack",
        description: "i18n.collectors.verpacking_com_rapidpack.description",
        version: "0",
        website: "https://www.verpacking.com/Mein-Konto?bestellungen=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159736.jpg",
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
        entryUrl: "https://www.verpacking.com/Mein-Konto?bestellungen=1",
    }

    constructor() {
        super(VerpackingComRapidpackCollector.CONFIG);
    }
}
