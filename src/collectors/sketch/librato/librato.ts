
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LibratoCollector extends SketchCollector {

    static CONFIG = {
        id: "librato",
        name: "librato",
        description: "i18n.collectors.librato.description",
        version: "0",
        website: "https://metrics.librato.com/account/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39681.jpg",
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
        entryUrl: "https://metrics.librato.com/account/plans",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LibratoCollector.CONFIG);
    }
}
