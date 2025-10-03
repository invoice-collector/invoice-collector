import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InwxCollector extends SketchCollector {

    static CONFIG = {
        id: "inwx",
        name: "INWX",
        description: "i18n.collectors.inwx.description",
        version: "0",
        website: "https://inwx.com",
        logo: "https://images.inwx.com/open-graph/inwx.png",
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
        entryUrl: "https://www.inwx.com/en",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InwxCollector.CONFIG);
    }
}
