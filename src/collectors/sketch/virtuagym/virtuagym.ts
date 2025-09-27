
import { SketchCollector } from '../../sketchCollector';

export class VirtuagymCollector extends SketchCollector {

    static CONFIG = {
        id: "virtuagym",
        name: "Virtuagym",
        description: "i18n.collectors.virtuagym.description",
        version: "0",
        website: "http://www.virtuagym.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16485.jpg",
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
        entryUrl: "http://www.virtuagym.com",
    }

    constructor() {
        super(VirtuagymCollector.CONFIG);
    }
}
