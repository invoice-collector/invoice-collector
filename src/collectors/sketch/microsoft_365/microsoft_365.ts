
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Microsoft365Collector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_365",
        name: "Microsoft 365",
        description: "i18n.collectors.microsoft_365.description",
        version: "0",
        website: "https://myaccount.microsoft.com/?ref=MeControl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1895662.jpg",
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
        entryUrl: "https://myaccount.microsoft.com/?ref=MeControl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Microsoft365Collector.CONFIG);
    }
}
