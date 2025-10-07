
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMfbcoParticuliersCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mfbco_particuliers",
        name: "Mutuelle MFBCO - Particuliers",
        description: "i18n.collectors.mutuelle_mfbco_particuliers.description",
        version: "0",
        website: "https://www.mutuelle-servicesplus.fr/solimutcentreocean/adherent.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129365.jpg",
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
        entryUrl: "https://www.mutuelle-servicesplus.fr/solimutcentreocean/adherent.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleMfbcoParticuliersCollector.CONFIG);
    }
}
