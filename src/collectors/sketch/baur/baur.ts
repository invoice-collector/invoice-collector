
import { SketchCollector } from '../../sketchCollector';

export class BaurCollector extends SketchCollector {

    static CONFIG = {
        id: "baur",
        name: "BAUR",
        description: "i18n.collectors.baur.description",
        version: "0",
        website: "https://www.baur.de/#els=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74696.jpg",
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
        entryUrl: "https://www.baur.de/#els=true",
    }

    constructor() {
        super(BaurCollector.CONFIG);
    }
}
