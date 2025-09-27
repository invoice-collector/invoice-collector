
import { SketchCollector } from '../../sketchCollector';

export class VolkswagenNaturstromCollector extends SketchCollector {

    static CONFIG = {
        id: "volkswagen_naturstrom",
        name: "Volkswagen Naturstrom",
        description: "i18n.collectors.volkswagen_naturstrom.description",
        version: "0",
        website: "https://naturstrom.elli.eco/kundenportal/exec/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/192497.jpg",
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
        entryUrl: "https://naturstrom.elli.eco/kundenportal/exec/",
    }

    constructor() {
        super(VolkswagenNaturstromCollector.CONFIG);
    }
}
