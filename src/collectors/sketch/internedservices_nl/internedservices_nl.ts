
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InternedservicesNlCollector extends SketchCollector {

    static CONFIG = {
        id: "internedservices_nl",
        name: "Internedservices.nl",
        description: "i18n.collectors.internedservices_nl.description",
        version: "0",
        website: "https://www.internedservices.nl/inloggen/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33391.jpg",
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
        entryUrl: "https://www.internedservices.nl/inloggen/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InternedservicesNlCollector.CONFIG);
    }
}
