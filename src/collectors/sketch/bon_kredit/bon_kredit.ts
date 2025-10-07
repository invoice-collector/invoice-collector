
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BonKreditCollector extends SketchCollector {

    static CONFIG = {
        id: "bon_kredit",
        name: "Bon Kredit",
        description: "i18n.collectors.bon_kredit.description",
        version: "0",
        website: "partner.bon-kredit.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1722898.jpg",
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
        entryUrl: "partner.bon-kredit.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BonKreditCollector.CONFIG);
    }
}
