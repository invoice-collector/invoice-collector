
import { SketchCollector } from '../../sketchCollector';

export class PackhelpCollector extends SketchCollector {

    static CONFIG = {
        id: "packhelp",
        name: "Packhelp",
        description: "i18n.collectors.packhelp.description",
        version: "0",
        website: "https://app.packhelp.de/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61425.jpg",
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
        entryUrl: "https://app.packhelp.de/sign_in",
    }

    constructor() {
        super(PackhelpCollector.CONFIG);
    }
}
