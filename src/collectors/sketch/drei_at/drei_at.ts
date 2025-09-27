
import { SketchCollector } from '../../sketchCollector';

export class DreiAtCollector extends SketchCollector {

    static CONFIG = {
        id: "drei_at",
        name: "drei.at",
        description: "i18n.collectors.drei_at.description",
        version: "0",
        website: "https://www.drei.at/selfcare/restricted/toEbill.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11786.jpg",
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
        entryUrl: "https://www.drei.at/selfcare/restricted/toEbill.do",
    }

    constructor() {
        super(DreiAtCollector.CONFIG);
    }
}
