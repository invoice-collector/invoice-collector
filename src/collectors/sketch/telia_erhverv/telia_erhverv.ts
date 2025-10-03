
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TeliaErhvervCollector extends SketchCollector {

    static CONFIG = {
        id: "telia_erhverv",
        name: "Telia Erhverv",
        description: "i18n.collectors.telia_erhverv.description",
        version: "0",
        website: "https://www.telia.dk/lux/cr/hjem/faktura/fakturaoverblik/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80275.jpg",
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
        entryUrl: "https://www.telia.dk/lux/cr/hjem/faktura/fakturaoverblik/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TeliaErhvervCollector.CONFIG);
    }
}
