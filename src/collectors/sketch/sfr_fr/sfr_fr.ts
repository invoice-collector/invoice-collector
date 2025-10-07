
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SfrFrCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_fr",
        name: "SFR.fr",
        description: "i18n.collectors.sfr_fr.description",
        version: "0",
        website: "https://www.sfr.fr/cas/login?service=https%3A%2F%2Fwww.sfr.fr%2Faccueil%2Fj_spring_cas_security_check#sfrintid=HS_EC_Me-connecter",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8754.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.sfr.fr/cas/login?service=https%3A%2F%2Fwww.sfr.fr%2Faccueil%2Fj_spring_cas_security_check#sfrintid=HS_EC_Me-connecter",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SfrFrCollector.CONFIG);
    }
}
