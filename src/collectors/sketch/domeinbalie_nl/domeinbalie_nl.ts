
import { SketchCollector } from '../../sketchCollector';

export class DomeinbalieNlCollector extends SketchCollector {

    static CONFIG = {
        id: "domeinbalie_nl",
        name: "Domeinbalie.nl",
        description: "i18n.collectors.domeinbalie_nl.description",
        version: "0",
        website: "https://www.domeinbalie.nl/lounge/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32320.jpg",
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
        entryUrl: "https://www.domeinbalie.nl/lounge/login",
    }

    constructor() {
        super(DomeinbalieNlCollector.CONFIG);
    }
}
