
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchlauComCollector extends SketchCollector {

    static CONFIG = {
        id: "schlau_com",
        name: "schlau.com",
        description: "i18n.collectors.schlau_com.description",
        version: "0",
        website: "https://mein.schlau.com/#{1}",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9521.jpg",
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
        entryUrl: "https://mein.schlau.com/#{1}",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchlauComCollector.CONFIG);
    }
}
