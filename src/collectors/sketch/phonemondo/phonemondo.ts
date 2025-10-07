
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhonemondoCollector extends SketchCollector {

    static CONFIG = {
        id: "phonemondo",
        name: "Phonemondo",
        description: "i18n.collectors.phonemondo.description",
        version: "0",
        website: "https://www.phonemondo.com/portal/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239235.jpg",
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
        entryUrl: "https://www.phonemondo.com/portal/dashboard/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhonemondoCollector.CONFIG);
    }
}
