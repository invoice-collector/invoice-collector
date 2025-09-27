
import { SketchCollector } from '../../sketchCollector';

export class AuxinumCollector extends SketchCollector {

    static CONFIG = {
        id: "auxinum",
        name: "Auxinum",
        description: "i18n.collectors.auxinum.description",
        version: "0",
        website: "https://auxinum.tq-onis.de/Intern/Balance/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4418486.jpg",
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
        entryUrl: "https://auxinum.tq-onis.de/Intern/Balance/",
    }

    constructor() {
        super(AuxinumCollector.CONFIG);
    }
}
