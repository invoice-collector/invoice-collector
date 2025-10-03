
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OpenliCollector extends SketchCollector {

    static CONFIG = {
        id: "openli",
        name: "Openli",
        description: "i18n.collectors.openli.description",
        version: "0",
        website: "https://app.openli.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1336077.jpg",
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
        entryUrl: "https://app.openli.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OpenliCollector.CONFIG);
    }
}
