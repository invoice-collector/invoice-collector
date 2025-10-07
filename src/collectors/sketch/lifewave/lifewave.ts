
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LifewaveCollector extends SketchCollector {

    static CONFIG = {
        id: "lifewave",
        name: "Lifewave",
        description: "i18n.collectors.lifewave.description",
        version: "0",
        website: "https://www.lifewave.com/corporphan/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14580.jpg",
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
        entryUrl: "https://www.lifewave.com/corporphan/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LifewaveCollector.CONFIG);
    }
}
