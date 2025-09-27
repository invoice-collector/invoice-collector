
import { SketchCollector } from '../../sketchCollector';

export class FdjFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "fdj_france",
        name: "FDJ France",
        description: "i18n.collectors.fdj_france.description",
        version: "0",
        website: "https://www.fdj.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/648510.jpg",
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
        entryUrl: "https://www.fdj.fr/",
    }

    constructor() {
        super(FdjFranceCollector.CONFIG);
    }
}
