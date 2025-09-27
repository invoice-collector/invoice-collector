
import { SketchCollector } from '../../sketchCollector';

export class RydooCollector extends SketchCollector {

    static CONFIG = {
        id: "rydoo",
        name: "Rydoo",
        description: "i18n.collectors.rydoo.description",
        version: "0",
        website: "https://accounts.rydoo.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/175277.jpg",
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
        entryUrl: "https://accounts.rydoo.com/login",
    }

    constructor() {
        super(RydooCollector.CONFIG);
    }
}
