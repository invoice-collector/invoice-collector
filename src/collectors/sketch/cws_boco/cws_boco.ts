
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CwsBocoCollector extends SketchCollector {

    static CONFIG = {
        id: "cws_boco",
        name: "CWS-boco",
        description: "i18n.collectors.cws_boco.description",
        version: "0",
        website: "https://www.mein-cws-boco.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21776.jpg",
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
        entryUrl: "https://www.mein-cws-boco.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CwsBocoCollector.CONFIG);
    }
}
