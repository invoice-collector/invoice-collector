
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeautifulCollector extends SketchCollector {

    static CONFIG = {
        id: "beautiful",
        name: "Beautiful",
        description: "i18n.collectors.beautiful.description",
        version: "0",
        website: "https://www.beautiful.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/746568.jpg",
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
        entryUrl: "https://www.beautiful.ai/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeautifulCollector.CONFIG);
    }
}
