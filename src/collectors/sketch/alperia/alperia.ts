
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlperiaCollector extends SketchCollector {

    static CONFIG = {
        id: "alperia",
        name: "Alperia",
        description: "i18n.collectors.alperia.description",
        version: "0",
        website: "http://www.alperia.eu",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31372.jpg",
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
        entryUrl: "http://www.alperia.eu",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlperiaCollector.CONFIG);
    }
}
