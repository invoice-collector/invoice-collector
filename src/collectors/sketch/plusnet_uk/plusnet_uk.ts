
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PlusnetUkCollector extends SketchCollector {

    static CONFIG = {
        id: "plusnet_uk",
        name: "Plusnet UK",
        description: "i18n.collectors.plusnet_uk.description",
        version: "0",
        website: "https://www.plus.net/member-centre/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8995.jpg",
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
        entryUrl: "https://www.plus.net/member-centre/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PlusnetUkCollector.CONFIG);
    }
}
