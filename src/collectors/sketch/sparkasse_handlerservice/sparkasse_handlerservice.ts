
import { SketchCollector } from '../../sketchCollector';

export class SparkasseHandlerserviceCollector extends SketchCollector {

    static CONFIG = {
        id: "sparkasse_handlerservice",
        name: "Sparkasse Handlerservice",
        description: "i18n.collectors.sparkasse_handlerservice.description",
        version: "0",
        website: "https://portal.s-haendlerservice.de/cms/spksp/Postfach/dokumente/neue-dokumente",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/127541.jpg",
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
        entryUrl: "https://portal.s-haendlerservice.de/cms/spksp/Postfach/dokumente/neue-dokumente",
    }

    constructor() {
        super(SparkasseHandlerserviceCollector.CONFIG);
    }
}
