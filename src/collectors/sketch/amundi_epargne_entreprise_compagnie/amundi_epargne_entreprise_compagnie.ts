
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmundiEpargneEntrepriseCompagnieCollector extends SketchCollector {

    static CONFIG = {
        id: "amundi_epargne_entreprise_compagnie",
        name: "Amundi Epargne Entreprise - Compagnie",
        description: "i18n.collectors.amundi_epargne_entreprise_compagnie.description",
        version: "0",
        website: "https://www.amundi-tc.com/ent/start.swe?SWECmd=Login&_sn=2fZ0SNaa7H9myYHE0wc8Iy1bTJpfx-wUrU-dHXRMgf0_&SWEHo=www.amundi-tc.com&SWETS=1550590900",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109158.jpg",
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
        entryUrl: "https://www.amundi-tc.com/ent/start.swe?SWECmd=Login&_sn=2fZ0SNaa7H9myYHE0wc8Iy1bTJpfx-wUrU-dHXRMgf0_&SWEHo=www.amundi-tc.com&SWETS=1550590900",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmundiEpargneEntrepriseCompagnieCollector.CONFIG);
    }
}
