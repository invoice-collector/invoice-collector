
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KiwihrCollector extends SketchCollector {

    static CONFIG = {
        id: "kiwihr",
        name: "KiwiHR",
        description: "i18n.collectors.kiwihr.description",
        version: "0",
        website: "https://kiwihr.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1301963.jpg",
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
        entryUrl: "https://kiwihr.com/de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KiwihrCollector.CONFIG);
    }
}
