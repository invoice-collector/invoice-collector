
import { SketchCollector } from '../../sketchCollector';

export class LaRedouteCollector extends SketchCollector {

    static CONFIG = {
        id: "la_redoute",
        name: "La Redoute",
        description: "i18n.collectors.la_redoute.description",
        version: "0",
        website: "https://www.laredoute.fr/login/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121361.jpg",
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
        entryUrl: "https://www.laredoute.fr/login/login.aspx",
    }

    constructor() {
        super(LaRedouteCollector.CONFIG);
    }
}
