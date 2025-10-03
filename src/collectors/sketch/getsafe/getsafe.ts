
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GetsafeCollector extends SketchCollector {

    static CONFIG = {
        id: "getsafe",
        name: "Getsafe",
        description: "i18n.collectors.getsafe.description",
        version: "0",
        website: "https://www.hellogetsafe.com/de-de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1313022.jpg",
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
        entryUrl: "https://www.hellogetsafe.com/de-de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GetsafeCollector.CONFIG);
    }
}
