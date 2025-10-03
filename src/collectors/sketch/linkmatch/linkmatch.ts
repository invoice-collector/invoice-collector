
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LinkmatchCollector extends SketchCollector {

    static CONFIG = {
        id: "linkmatch",
        name: "linkmatch",
        description: "i18n.collectors.linkmatch.description",
        version: "0",
        website: "https://www.linkmatch.net/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1239406.jpg",
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
        entryUrl: "https://www.linkmatch.net/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LinkmatchCollector.CONFIG);
    }
}
