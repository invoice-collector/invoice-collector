
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MarckIndustriesCollector extends SketchCollector {

    static CONFIG = {
        id: "marck_industries",
        name: "Marck Industries",
        description: "i18n.collectors.marck_industries.description",
        version: "0",
        website: "https://waste.marck.net/truxweb/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88492.jpg",
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
        entryUrl: "https://waste.marck.net/truxweb/login.aspx",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MarckIndustriesCollector.CONFIG);
    }
}
