
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CocolyzeCollector extends SketchCollector {

    static CONFIG = {
        id: "cocolyze",
        name: "Cocolyze",
        description: "i18n.collectors.cocolyze.description",
        version: "0",
        website: "https://cocolyze.com/fr/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/737779.jpg",
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
        entryUrl: "https://cocolyze.com/fr/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CocolyzeCollector.CONFIG);
    }
}
