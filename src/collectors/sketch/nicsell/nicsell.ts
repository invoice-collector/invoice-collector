
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NicsellCollector extends SketchCollector {

    static CONFIG = {
        id: "nicsell",
        name: "nicsell",
        description: "i18n.collectors.nicsell.description",
        version: "0",
        website: "https://nicsell.com/en/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52187.jpg",
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
        entryUrl: "https://nicsell.com/en/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NicsellCollector.CONFIG);
    }
}
