
import { SketchCollector } from '../../sketchCollector';

export class MCommeMutuelleCollector extends SketchCollector {

    static CONFIG = {
        id: "m_comme_mutuelle",
        name: "M Comme Mutuelle",
        description: "i18n.collectors.m_comme_mutuelle.description",
        version: "0",
        website: "https://www.mgen.fr/login-adherent/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/133283.jpg",
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
        entryUrl: "https://www.mgen.fr/login-adherent/",
    }

    constructor() {
        super(MCommeMutuelleCollector.CONFIG);
    }
}
