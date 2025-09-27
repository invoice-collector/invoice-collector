
import { SketchCollector } from '../../sketchCollector';

export class BrumairCollector extends SketchCollector {

    static CONFIG = {
        id: "brumair",
        name: "Brumair",
        description: "i18n.collectors.brumair.description",
        version: "0",
        website: "https://www.e-brumair.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115947.jpg",
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
        entryUrl: "https://www.e-brumair.com/",
    }

    constructor() {
        super(BrumairCollector.CONFIG);
    }
}
