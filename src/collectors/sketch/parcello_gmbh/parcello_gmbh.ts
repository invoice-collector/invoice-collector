
import { SketchCollector } from '../../sketchCollector';

export class ParcelloGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "parcello_gmbh",
        name: "Parcello GmbH",
        description: "i18n.collectors.parcello_gmbh.description",
        version: "0",
        website: "https://www.parcello.org/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203110.jpg",
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
        entryUrl: "https://www.parcello.org/login",
    }

    constructor() {
        super(ParcelloGmbhCollector.CONFIG);
    }
}
