
import { SketchCollector } from '../../sketchCollector';

export class IkeaKreditkarteCollector extends SketchCollector {

    static CONFIG = {
        id: "ikea_kreditkarte",
        name: "IKEA kreditkarte",
        description: "i18n.collectors.ikea_kreditkarte.description",
        version: "0",
        website: "https://www.onlinebanking.ikea-kreditkarte.de/#/login/cred",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134907.jpg",
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
        entryUrl: "https://www.onlinebanking.ikea-kreditkarte.de/#/login/cred",
    }

    constructor() {
        super(IkeaKreditkarteCollector.CONFIG);
    }
}
