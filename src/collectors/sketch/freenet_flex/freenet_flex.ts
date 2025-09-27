
import { SketchCollector } from '../../sketchCollector';

export class FreenetFlexCollector extends SketchCollector {

    static CONFIG = {
        id: "freenet_flex",
        name: "Freenet Flex",
        description: "i18n.collectors.freenet_flex.description",
        version: "0",
        website: "https://www.freenet-flex.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1281565.jpg",
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
        entryUrl: "https://www.freenet-flex.de",
    }

    constructor() {
        super(FreenetFlexCollector.CONFIG);
    }
}
