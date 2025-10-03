
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CpamRelevesMensuelsAmeliFrCollector extends SketchCollector {

    static CONFIG = {
        id: "cpam_releves_mensuels_ameli_fr",
        name: "CPAM (releves mensuels Ameli.fr)",
        description: "i18n.collectors.cpam_releves_mensuels_ameli_fr.description",
        version: "0",
        website: "https://utilisateur-forum-assures.ameli.fr/cas/login?service=https%3A%2F%2Fforum-assures.ameli.fr%2Fquestions%2F1559000-telecharger-releves-mensuels-paiements&env=desk",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123800.jpg",
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
        entryUrl: "https://utilisateur-forum-assures.ameli.fr/cas/login?service=https%3A%2F%2Fforum-assures.ameli.fr%2Fquestions%2F1559000-telecharger-releves-mensuels-paiements&env=desk",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CpamRelevesMensuelsAmeliFrCollector.CONFIG);
    }
}
