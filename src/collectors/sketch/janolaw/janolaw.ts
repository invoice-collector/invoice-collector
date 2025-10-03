
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JanolawCollector extends SketchCollector {

    static CONFIG = {
        id: "janolaw",
        name: "Janolaw",
        description: "i18n.collectors.janolaw.description",
        version: "0",
        website: "https://www.janolaw.de/myjanolaw/rechnungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45712.jpg",
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
        entryUrl: "https://www.janolaw.de/myjanolaw/rechnungen.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JanolawCollector.CONFIG);
    }
}
