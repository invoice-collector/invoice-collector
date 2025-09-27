
import { SketchCollector } from '../../sketchCollector';

export class MijndomeinCollector extends SketchCollector {

    static CONFIG = {
        id: "mijndomein",
        name: "mijndomein",
        description: "i18n.collectors.mijndomein.description",
        version: "0",
        website: "https://auth.mijndomein.nl/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20508.jpg",
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
        entryUrl: "https://auth.mijndomein.nl/login",
    }

    constructor() {
        super(MijndomeinCollector.CONFIG);
    }
}
