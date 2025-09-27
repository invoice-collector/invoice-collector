
import { SketchCollector } from '../../sketchCollector';

export class OttomatikCollector extends SketchCollector {

    static CONFIG = {
        id: "ottomatik",
        name: "Ottomatik",
        description: "i18n.collectors.ottomatik.description",
        version: "0",
        website: "https://ottomatik.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44819.jpg",
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
        entryUrl: "https://ottomatik.io/login",
    }

    constructor() {
        super(OttomatikCollector.CONFIG);
    }
}
