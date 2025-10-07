
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _123inktNlCollector extends SketchCollector {

    static CONFIG = {
        id: "123inkt_nl",
        name: "123inkt.nl",
        description: "i18n.collectors.123inkt_nl.description",
        version: "0",
        website: "https://www.123inkt.nl/customer/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24461.jpg",
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
        entryUrl: "https://www.123inkt.nl/customer/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_123inktNlCollector.CONFIG);
    }
}
