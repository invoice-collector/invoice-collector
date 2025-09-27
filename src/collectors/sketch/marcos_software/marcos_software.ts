
import { SketchCollector } from '../../sketchCollector';

export class MarcosSoftwareCollector extends SketchCollector {

    static CONFIG = {
        id: "marcos_software",
        name: "marcos software",
        description: "i18n.collectors.marcos_software.description",
        version: "0",
        website: "https://www.unicorn2.de/kundenbereich/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10794.jpg",
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
        entryUrl: "https://www.unicorn2.de/kundenbereich/",
    }

    constructor() {
        super(MarcosSoftwareCollector.CONFIG);
    }
}
