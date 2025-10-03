
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConvertistCollector extends SketchCollector {

    static CONFIG = {
        id: "convertist",
        name: "Convertist",
        description: "i18n.collectors.convertist.description",
        version: "0",
        website: "https://www.convertist.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43182.jpg",
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
        entryUrl: "https://www.convertist.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConvertistCollector.CONFIG);
    }
}
