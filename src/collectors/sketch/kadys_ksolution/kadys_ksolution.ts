
import { SketchCollector } from '../../sketchCollector';

export class KadysKsolutionCollector extends SketchCollector {

    static CONFIG = {
        id: "kadys_ksolution",
        name: "Kadys - KSolution",
        description: "i18n.collectors.kadys_ksolution.description",
        version: "0",
        website: "https://ksign.kadys.fr/Administration/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4560954.jpg",
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
        entryUrl: "https://ksign.kadys.fr/Administration/Index",
    }

    constructor() {
        super(KadysKsolutionCollector.CONFIG);
    }
}
