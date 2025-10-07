
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CpamReleveFiscalAmeliFrCollector extends SketchCollector {

    static CONFIG = {
        id: "cpam_releve_fiscal_ameli_fr",
        name: "CPAM (Releve fiscal Ameli.fr)",
        description: "i18n.collectors.cpam_releve_fiscal_ameli_fr.description",
        version: "0",
        website: "https://www.ameli.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123798.jpg",
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
        entryUrl: "https://www.ameli.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CpamReleveFiscalAmeliFrCollector.CONFIG);
    }
}
