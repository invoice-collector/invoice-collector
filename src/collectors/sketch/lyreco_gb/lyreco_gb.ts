
import { SketchCollector } from '../../sketchCollector';

export class LyrecoGbCollector extends SketchCollector {

    static CONFIG = {
        id: "lyreco_gb",
        name: "Lyreco GB",
        description: "i18n.collectors.lyreco_gb.description",
        version: "0",
        website: "https://www.lyreco.com/webshop/ENEN/index.html?lc=ENEN",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73420.jpg",
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
        entryUrl: "https://www.lyreco.com/webshop/ENEN/index.html?lc=ENEN",
    }

    constructor() {
        super(LyrecoGbCollector.CONFIG);
    }
}
