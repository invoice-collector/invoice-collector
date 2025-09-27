
import { SketchCollector } from '../../sketchCollector';

export class MutuelleGmcHennerCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_gmc_henner",
        name: "Mutuelle GMC / Henner",
        description: "i18n.collectors.mutuelle_gmc_henner.description",
        version: "0",
        website: "https://welcome.henner.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/128482.jpg",
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
        entryUrl: "https://welcome.henner.com/en/",
    }

    constructor() {
        super(MutuelleGmcHennerCollector.CONFIG);
    }
}
