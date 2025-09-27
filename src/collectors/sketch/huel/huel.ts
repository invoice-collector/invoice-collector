
import { SketchCollector } from '../../sketchCollector';

export class HuelCollector extends SketchCollector {

    static CONFIG = {
        id: "huel",
        name: "Huel",
        description: "i18n.collectors.huel.description",
        version: "0",
        website: "https://de.huel.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4491396.jpg",
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
        entryUrl: "https://de.huel.com/login",
    }

    constructor() {
        super(HuelCollector.CONFIG);
    }
}
