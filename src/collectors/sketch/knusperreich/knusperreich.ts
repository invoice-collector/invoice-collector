
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KnusperreichCollector extends SketchCollector {

    static CONFIG = {
        id: "knusperreich",
        name: "Knusperreich",
        description: "i18n.collectors.knusperreich.description",
        version: "0",
        website: "http://www.knusperreich.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30597.jpg",
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
        entryUrl: "http://www.knusperreich.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KnusperreichCollector.CONFIG);
    }
}
