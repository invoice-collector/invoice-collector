
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DpdFrCollector extends SketchCollector {

    static CONFIG = {
        id: "dpd_fr",
        name: "dpd (fr)",
        description: "i18n.collectors.dpd_fr.description",
        version: "0",
        website: "https://www.dpd.fr/professionnels",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/875954.jpg",
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
        entryUrl: "https://www.dpd.fr/professionnels",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DpdFrCollector.CONFIG);
    }
}
