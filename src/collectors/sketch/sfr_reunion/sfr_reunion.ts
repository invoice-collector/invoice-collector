
import { SketchCollector } from '../../sketchCollector';

export class SfrReunionCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_reunion",
        name: "SFR Reunion",
        description: "i18n.collectors.sfr_reunion.description",
        version: "0",
        website: "https://sso.sfr.re/login?service=https://www.sfr.re/boutique-mobile/api/secure/validate",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135081.jpg",
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
        entryUrl: "https://sso.sfr.re/login?service=https://www.sfr.re/boutique-mobile/api/secure/validate",
    }

    constructor() {
        super(SfrReunionCollector.CONFIG);
    }
}
