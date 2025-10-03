
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpringwiseCollector extends SketchCollector {

    static CONFIG = {
        id: "springwise",
        name: "Springwise",
        description: "i18n.collectors.springwise.description",
        version: "0",
        website: "http://www.springwise.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24565.jpg",
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
        entryUrl: "http://www.springwise.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpringwiseCollector.CONFIG);
    }
}
