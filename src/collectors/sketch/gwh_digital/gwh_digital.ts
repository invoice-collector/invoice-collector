
import { SketchCollector } from '../../sketchCollector';

export class GwhDigitalCollector extends SketchCollector {

    static CONFIG = {
        id: "gwh_digital",
        name: "GWH Digital",
        description: "i18n.collectors.gwh_digital.description",
        version: "0",
        website: "https://service.utroper-net.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1357506.jpg",
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
        entryUrl: "https://service.utroper-net.de/",
    }

    constructor() {
        super(GwhDigitalCollector.CONFIG);
    }
}
