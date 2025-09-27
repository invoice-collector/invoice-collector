
import { SketchCollector } from '../../sketchCollector';

export class MutuelleProBtpCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_pro_btp",
        name: "Mutuelle Pro BTP",
        description: "i18n.collectors.mutuelle_pro_btp.description",
        version: "0",
        website: "https://www.probtp.com/ext/parAccueil.do?accueil=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130351.jpg",
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
        entryUrl: "https://www.probtp.com/ext/parAccueil.do?accueil=true",
    }

    constructor() {
        super(MutuelleProBtpCollector.CONFIG);
    }
}
