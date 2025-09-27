
import { SketchCollector } from '../../sketchCollector';

export class EdnaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "edna_de",
        name: "EDNA.de",
        description: "i18n.collectors.edna_de.description",
        version: "0",
        website: "https://www.edna.de/epages/Edna.sf/de_DE/?ObjectPath=/Shops/Edna&ViewAction=ViewMyAccount&LastViewAction=ViewMyAccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/842055.jpg",
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
        entryUrl: "https://www.edna.de/epages/Edna.sf/de_DE/?ObjectPath=/Shops/Edna&ViewAction=ViewMyAccount&LastViewAction=ViewMyAccount",
    }

    constructor() {
        super(EdnaDeCollector.CONFIG);
    }
}
