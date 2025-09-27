
import { SketchCollector } from '../../sketchCollector';

export class ApellaAktiengesellschaftCollector extends SketchCollector {

    static CONFIG = {
        id: "apella_aktiengesellschaft",
        name: "Apella Aktiengesellschaft",
        description: "i18n.collectors.apella_aktiengesellschaft.description",
        version: "0",
        website: "https://www.apella.de/login/main/exlogin.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/180761.jpg",
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
        entryUrl: "https://www.apella.de/login/main/exlogin.php",
    }

    constructor() {
        super(ApellaAktiengesellschaftCollector.CONFIG);
    }
}
