
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleMutuaeroProfessionnelsDeSanteCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_mutuaero_professionnels_de_sante",
        name: "Mutuelle Mutuaero - professionnels de sante",
        description: "i18n.collectors.mutuelle_mutuaero_professionnels_de_sante.description",
        version: "0",
        website: "https://pfs.synergie-mutuelles.fr/default_synergie.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130356.jpg",
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
        entryUrl: "https://pfs.synergie-mutuelles.fr/default_synergie.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleMutuaeroProfessionnelsDeSanteCollector.CONFIG);
    }
}
