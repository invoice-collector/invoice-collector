
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SlidCollector extends SketchCollector {

    static CONFIG = {
        id: "slid",
        name: "Slid",
        description: "i18n.collectors.slid.description",
        version: "0",
        website: "https://app.slid.cc/docs",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004076.jpg",
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
        entryUrl: "https://app.slid.cc/docs",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SlidCollector.CONFIG);
    }
}
