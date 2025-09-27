
import { SketchCollector } from '../../sketchCollector';

export class SpatieCollector extends SketchCollector {

    static CONFIG = {
        id: "spatie",
        name: "Spatie",
        description: "i18n.collectors.spatie.description",
        version: "0",
        website: "https://spatie.be/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1093683.jpg",
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
        entryUrl: "https://spatie.be/login",
    }

    constructor() {
        super(SpatieCollector.CONFIG);
    }
}
