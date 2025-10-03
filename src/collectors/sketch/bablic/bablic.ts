
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BablicCollector extends SketchCollector {

    static CONFIG = {
        id: "bablic",
        name: "bablic",
        description: "i18n.collectors.bablic.description",
        version: "0",
        website: "http://www.bablic.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22160.jpg",
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
        entryUrl: "http://www.bablic.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BablicCollector.CONFIG);
    }
}
