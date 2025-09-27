
import { SketchCollector } from '../../sketchCollector';

export class _23mediaCollector extends SketchCollector {

    static CONFIG = {
        id: "23media",
        name: "23media",
        description: "i18n.collectors.23media.description",
        version: "0",
        website: "http://www.23media.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47333.jpg",
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
        entryUrl: "http://www.23media.de",
    }

    constructor() {
        super(_23mediaCollector.CONFIG);
    }
}
