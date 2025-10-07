
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ContoraAgCollector extends SketchCollector {

    static CONFIG = {
        id: "contora_ag",
        name: "CONTORA AG",
        description: "i18n.collectors.contora_ag.description",
        version: "0",
        website: "https://kunden.contora.de/index.php?id=333&no_cache=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1749296.jpg",
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
        entryUrl: "https://kunden.contora.de/index.php?id=333&no_cache=1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ContoraAgCollector.CONFIG);
    }
}
