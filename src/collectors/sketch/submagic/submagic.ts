
import { SketchCollector } from '../../sketchCollector';

export class SubmagicCollector extends SketchCollector {

    static CONFIG = {
        id: "submagic",
        name: "Submagic",
        description: "i18n.collectors.submagic.description",
        version: "0",
        website: "https://app.submagic.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2508562.jpg",
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
        entryUrl: "https://app.submagic.co/login",
    }

    constructor() {
        super(SubmagicCollector.CONFIG);
    }
}
