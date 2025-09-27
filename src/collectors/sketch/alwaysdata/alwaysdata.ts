
import { SketchCollector } from '../../sketchCollector';

export class AlwaysdataCollector extends SketchCollector {

    static CONFIG = {
        id: "alwaysdata",
        name: "Alwaysdata",
        description: "i18n.collectors.alwaysdata.description",
        version: "0",
        website: "https://admin.alwaysdata.com/login/?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27505.jpg",
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
        entryUrl: "https://admin.alwaysdata.com/login/?next=/",
    }

    constructor() {
        super(AlwaysdataCollector.CONFIG);
    }
}
