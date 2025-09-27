
import { SketchCollector } from '../../sketchCollector';

export class ManituCollector extends SketchCollector {

    static CONFIG = {
        id: "manitu",
        name: "manitu",
        description: "i18n.collectors.manitu.description",
        version: "0",
        website: "http://www.manitu.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9426.jpg",
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
        entryUrl: "http://www.manitu.de",
    }

    constructor() {
        super(ManituCollector.CONFIG);
    }
}
