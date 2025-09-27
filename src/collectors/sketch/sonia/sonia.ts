
import { SketchCollector } from '../../sketchCollector';

export class SoniaCollector extends SketchCollector {

    static CONFIG = {
        id: "sonia",
        name: "Sonia",
        description: "i18n.collectors.sonia.description",
        version: "0",
        website: "https://sonia.so/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487995.jpg",
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
        entryUrl: "https://sonia.so/app/",
    }

    constructor() {
        super(SoniaCollector.CONFIG);
    }
}
