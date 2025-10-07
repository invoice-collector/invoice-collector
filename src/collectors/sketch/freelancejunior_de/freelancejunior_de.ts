
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FreelancejuniorDeCollector extends SketchCollector {

    static CONFIG = {
        id: "freelancejunior_de",
        name: "freelancejunior.de",
        description: "i18n.collectors.freelancejunior_de.description",
        version: "0",
        website: "https://www.freelancejunior.de/meine-rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/159735.jpg",
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
        entryUrl: "https://www.freelancejunior.de/meine-rechnungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FreelancejuniorDeCollector.CONFIG);
    }
}
