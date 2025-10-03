
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EpagCollector extends SketchCollector {

    static CONFIG = {
        id: "epag",
        name: "EPAG",
        description: "i18n.collectors.epag.description",
        version: "0",
        website: "https://domrob.epag.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18674.jpg",
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
        entryUrl: "https://domrob.epag.net/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EpagCollector.CONFIG);
    }
}
