
import { SketchCollector } from '../../sketchCollector';

export class RheinbahnAboonlineCollector extends SketchCollector {

    static CONFIG = {
        id: "rheinbahn_aboonline",
        name: "Rheinbahn AboOnline",
        description: "i18n.collectors.rheinbahn_aboonline.description",
        version: "0",
        website: "https://aboonline.rheinbahn.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53082.jpg",
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
        entryUrl: "https://aboonline.rheinbahn.de/",
    }

    constructor() {
        super(RheinbahnAboonlineCollector.CONFIG);
    }
}
