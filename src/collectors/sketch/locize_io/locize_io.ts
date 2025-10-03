
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LocizeIoCollector extends SketchCollector {

    static CONFIG = {
        id: "locize_io",
        name: "locize.io",
        description: "i18n.collectors.locize_io.description",
        version: "0",
        website: "https://www.locize.io/login?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11589.jpg",
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
        entryUrl: "https://www.locize.io/login?next=/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LocizeIoCollector.CONFIG);
    }
}
