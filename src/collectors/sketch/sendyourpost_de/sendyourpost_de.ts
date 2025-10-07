
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SendyourpostDeCollector extends SketchCollector {

    static CONFIG = {
        id: "sendyourpost_de",
        name: "sendyourpost.de",
        description: "i18n.collectors.sendyourpost_de.description",
        version: "0",
        website: "http://www.sendyourpost.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19381.jpg",
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
        entryUrl: "http://www.sendyourpost.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SendyourpostDeCollector.CONFIG);
    }
}
