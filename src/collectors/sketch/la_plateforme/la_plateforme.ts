
import { SketchCollector } from '../../sketchCollector';

export class LaPlateformeCollector extends SketchCollector {

    static CONFIG = {
        id: "la_plateforme",
        name: "La Plateforme",
        description: "i18n.collectors.la_plateforme.description",
        version: "0",
        website: "https://www.laplateforme.com/users/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/196420.jpg",
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
        entryUrl: "https://www.laplateforme.com/users/login",
    }

    constructor() {
        super(LaPlateformeCollector.CONFIG);
    }
}
