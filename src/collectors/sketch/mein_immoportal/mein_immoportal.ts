
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MeinImmoportalCollector extends SketchCollector {

    static CONFIG = {
        id: "mein_immoportal",
        name: "Mein Immoportal",
        description: "i18n.collectors.mein_immoportal.description",
        version: "0",
        website: "https://service.meinimmoportal.eu/clientarea.php?action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4189100.jpg",
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
        entryUrl: "https://service.meinimmoportal.eu/clientarea.php?action=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MeinImmoportalCollector.CONFIG);
    }
}
