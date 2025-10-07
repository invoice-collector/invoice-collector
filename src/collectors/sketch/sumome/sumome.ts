
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SumomeCollector extends SketchCollector {

    static CONFIG = {
        id: "sumome",
        name: "SumoMe",
        description: "i18n.collectors.sumome.description",
        version: "0",
        website: "https://sumome.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6485.jpg",
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
        entryUrl: "https://sumome.com/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SumomeCollector.CONFIG);
    }
}
