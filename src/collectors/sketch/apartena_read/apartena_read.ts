
import { SketchCollector } from '../../sketchCollector';

export class ApartenaReadCollector extends SketchCollector {

    static CONFIG = {
        id: "apartena_read",
        name: "Apartena.read",
        description: "i18n.collectors.apartena_read.description",
        version: "0",
        website: "https://read.apartena.net/user-billings.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103285.jpg",
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
        entryUrl: "https://read.apartena.net/user-billings.do",
    }

    constructor() {
        super(ApartenaReadCollector.CONFIG);
    }
}
