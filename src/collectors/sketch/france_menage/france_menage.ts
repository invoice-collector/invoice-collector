
import { SketchCollector } from '../../sketchCollector';

export class FranceMenageCollector extends SketchCollector {

    static CONFIG = {
        id: "france_menage",
        name: "France Menage",
        description: "i18n.collectors.france_menage.description",
        version: "0",
        website: "https://client.france-menage.fr/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106548.jpg",
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
        entryUrl: "https://client.france-menage.fr/login",
    }

    constructor() {
        super(FranceMenageCollector.CONFIG);
    }
}
