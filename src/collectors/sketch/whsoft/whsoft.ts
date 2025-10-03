
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WhsoftCollector extends SketchCollector {

    static CONFIG = {
        id: "whsoft",
        name: "whsoft",
        description: "i18n.collectors.whsoft.description",
        version: "0",
        website: "https://login2.whsoft.de/konto/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88443.jpg",
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
        entryUrl: "https://login2.whsoft.de/konto/rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhsoftCollector.CONFIG);
    }
}
