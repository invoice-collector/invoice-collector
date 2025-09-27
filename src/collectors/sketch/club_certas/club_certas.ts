
import { SketchCollector } from '../../sketchCollector';

export class ClubCertasCollector extends SketchCollector {

    static CONFIG = {
        id: "club_certas",
        name: "Club Certas",
        description: "i18n.collectors.club_certas.description",
        version: "0",
        website: "https://www.club-certas.com/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4488212.jpg",
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
        entryUrl: "https://www.club-certas.com/Account/Login",
    }

    constructor() {
        super(ClubCertasCollector.CONFIG);
    }
}
