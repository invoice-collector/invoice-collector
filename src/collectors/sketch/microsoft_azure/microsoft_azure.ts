
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MicrosoftAzureCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_azure",
        name: "Microsoft Azure",
        description: "i18n.collectors.microsoft_azure.description",
        version: "0",
        website: "http://azure.microsoft.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8758.jpg",
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
        entryUrl: "http://azure.microsoft.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MicrosoftAzureCollector.CONFIG);
    }
}
