
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EweTechnikerKrankenkasseCollector extends SketchCollector {

    static CONFIG = {
        id: "ewe_techniker_krankenkasse",
        name: "EWE Techniker Krankenkasse",
        description: "i18n.collectors.ewe_techniker_krankenkasse.description",
        version: "0",
        website: "https://meine-tk.ewe.de/eCare",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2310355.jpg",
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
        entryUrl: "https://meine-tk.ewe.de/eCare",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EweTechnikerKrankenkasseCollector.CONFIG);
    }
}
