
import { SketchCollector } from '../../sketchCollector';

export class Sat2wayCollector extends SketchCollector {

    static CONFIG = {
        id: "sat2way",
        name: "Sat2way",
        description: "i18n.collectors.sat2way.description",
        version: "0",
        website: "https://my.europasat.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135080.jpg",
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
        entryUrl: "https://my.europasat.com/login",
    }

    constructor() {
        super(Sat2wayCollector.CONFIG);
    }
}
