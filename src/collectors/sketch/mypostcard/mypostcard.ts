
import { SketchCollector } from '../../sketchCollector';

export class MypostcardCollector extends SketchCollector {

    static CONFIG = {
        id: "mypostcard",
        name: "mypostcard",
        description: "i18n.collectors.mypostcard.description",
        version: "0",
        website: "https://www.mypostcard.com/kundenkonto/guthaben-aufladen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1470090.jpg",
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
        entryUrl: "https://www.mypostcard.com/kundenkonto/guthaben-aufladen",
    }

    constructor() {
        super(MypostcardCollector.CONFIG);
    }
}
