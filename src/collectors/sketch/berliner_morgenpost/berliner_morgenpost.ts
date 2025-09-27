
import { SketchCollector } from '../../sketchCollector';

export class BerlinerMorgenpostCollector extends SketchCollector {

    static CONFIG = {
        id: "berliner_morgenpost",
        name: "Berliner Morgenpost",
        description: "i18n.collectors.berliner_morgenpost.description",
        version: "0",
        website: "http://www.morgenpost.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65629.jpg",
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
        entryUrl: "http://www.morgenpost.de",
    }

    constructor() {
        super(BerlinerMorgenpostCollector.CONFIG);
    }
}
