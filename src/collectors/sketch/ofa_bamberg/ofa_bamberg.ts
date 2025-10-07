
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OfaBambergCollector extends SketchCollector {

    static CONFIG = {
        id: "ofa_bamberg",
        name: "Ofa Bamberg",
        description: "i18n.collectors.ofa_bamberg.description",
        version: "0",
        website: "https://portal.ofa24.de/login/?next=/de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/418662.jpg",
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
        entryUrl: "https://portal.ofa24.de/login/?next=/de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OfaBambergCollector.CONFIG);
    }
}
