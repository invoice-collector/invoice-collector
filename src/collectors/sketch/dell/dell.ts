
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DellCollector extends SketchCollector {

    static CONFIG = {
        id: "dell",
        name: "Dell",
        description: "i18n.collectors.dell.description",
        version: "0",
        website: "https://www.dell.com/de-de/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8846.jpg",
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
        entryUrl: "https://www.dell.com/de-de/myaccount",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DellCollector.CONFIG);
    }
}
