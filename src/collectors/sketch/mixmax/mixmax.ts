
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MixmaxCollector extends SketchCollector {

    static CONFIG = {
        id: "mixmax",
        name: "Mixmax",
        description: "i18n.collectors.mixmax.description",
        version: "0",
        website: "https://app.mixmax.com/dashboard?login=new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28523.jpg",
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
        entryUrl: "https://app.mixmax.com/dashboard?login=new",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MixmaxCollector.CONFIG);
    }
}
