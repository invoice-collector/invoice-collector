
import { SketchCollector } from '../../sketchCollector';

export class InwareCollector extends SketchCollector {

    static CONFIG = {
        id: "inware",
        name: "Inware",
        description: "i18n.collectors.inware.description",
        version: "0",
        website: "https://www.inware.de/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2728433.jpg",
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
        entryUrl: "https://www.inware.de/account/",
    }

    constructor() {
        super(InwareCollector.CONFIG);
    }
}
