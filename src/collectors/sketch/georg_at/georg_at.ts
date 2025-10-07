
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GeorgAtCollector extends SketchCollector {

    static CONFIG = {
        id: "georg_at",
        name: "Georg.at",
        description: "i18n.collectors.georg_at.description",
        version: "0",
        website: "https://kundencenter.georg.at/app/aufladungen_rechnungsbelege.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4095882.jpg",
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
        entryUrl: "https://kundencenter.georg.at/app/aufladungen_rechnungsbelege.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GeorgAtCollector.CONFIG);
    }
}
