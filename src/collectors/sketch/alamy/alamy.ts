
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlamyCollector extends SketchCollector {

    static CONFIG = {
        id: "alamy",
        name: "Alamy",
        description: "i18n.collectors.alamy.description",
        version: "0",
        website: "http://www.alamy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36953.jpg",
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
        entryUrl: "http://www.alamy.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlamyCollector.CONFIG);
    }
}
