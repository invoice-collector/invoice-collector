
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PicdropCollector extends SketchCollector {

    static CONFIG = {
        id: "picdrop",
        name: "PicDrop",
        description: "i18n.collectors.picdrop.description",
        version: "0",
        website: "https://www.picdrop.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14461.jpg",
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
        entryUrl: "https://www.picdrop.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PicdropCollector.CONFIG);
    }
}
