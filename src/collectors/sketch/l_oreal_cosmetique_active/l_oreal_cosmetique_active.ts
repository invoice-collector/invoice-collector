
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LOrealCosmetiqueActiveCollector extends SketchCollector {

    static CONFIG = {
        id: "l_oreal_cosmetique_active",
        name: "L'Oreal Cosmetique Active",
        description: "i18n.collectors.l_oreal_cosmetique_active.description",
        version: "0",
        website: "https://www.loreal.com/en/active-cosmetics-division/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/496968.jpg",
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
        entryUrl: "https://www.loreal.com/en/active-cosmetics-division/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LOrealCosmetiqueActiveCollector.CONFIG);
    }
}
