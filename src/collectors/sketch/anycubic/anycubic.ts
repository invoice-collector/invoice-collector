
import { SketchCollector } from '../../sketchCollector';

export class AnycubicCollector extends SketchCollector {

    static CONFIG = {
        id: "anycubic",
        name: "anycubic",
        description: "i18n.collectors.anycubic.description",
        version: "0",
        website: "www.anycubic.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1754242.jpg",
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
        entryUrl: "www.anycubic.com/account",
    }

    constructor() {
        super(AnycubicCollector.CONFIG);
    }
}
