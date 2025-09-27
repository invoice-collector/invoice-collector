
import { SketchCollector } from '../../sketchCollector';

export class LyrecoFrCollector extends SketchCollector {

    static CONFIG = {
        id: "lyreco_fr",
        name: "Lyreco FR",
        description: "i18n.collectors.lyreco_fr.description",
        version: "0",
        website: "https://www.lyreco.com/webshop/FRFR/wslogin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4495744.jpg",
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
        entryUrl: "https://www.lyreco.com/webshop/FRFR/wslogin",
    }

    constructor() {
        super(LyrecoFrCollector.CONFIG);
    }
}
