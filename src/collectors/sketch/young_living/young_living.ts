
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YoungLivingCollector extends SketchCollector {

    static CONFIG = {
        id: "young_living",
        name: "young living",
        description: "i18n.collectors.young_living.description",
        version: "0",
        website: "https://www.youngliving.com/vo/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2189592.jpg",
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
        entryUrl: "https://www.youngliving.com/vo/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YoungLivingCollector.CONFIG);
    }
}
