
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WinworkerCollector extends SketchCollector {

    static CONFIG = {
        id: "winworker",
        name: "WinWorker",
        description: "i18n.collectors.winworker.description",
        version: "0",
        website: "https://www.winworker.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/790754.jpg",
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
        entryUrl: "https://www.winworker.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WinworkerCollector.CONFIG);
    }
}
