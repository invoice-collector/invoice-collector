
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ABSRechenzentrumCollector extends SketchCollector {

    static CONFIG = {
        id: "a_b_s_rechenzentrum",
        name: "a.b.s Rechenzentrum",
        description: "i18n.collectors.a_b_s_rechenzentrum.description",
        version: "0",
        website: "https://www.abs-rz.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1040952.jpg",
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
        entryUrl: "https://www.abs-rz.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ABSRechenzentrumCollector.CONFIG);
    }
}
