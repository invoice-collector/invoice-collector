
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class RichterFrenzelCollector extends SketchCollector {

    static CONFIG = {
        id: "richter_frenzel",
        name: "Richter-Frenzel",
        description: "i18n.collectors.richter_frenzel.description",
        version: "0",
        website: "https://www.richter-frenzel.de/b2b/profi-login/#e-sales",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65486.jpg",
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
        entryUrl: "https://www.richter-frenzel.de/b2b/profi-login/#e-sales",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RichterFrenzelCollector.CONFIG);
    }
}
