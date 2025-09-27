
import { SketchCollector } from '../../sketchCollector';

export class EledoCollector extends SketchCollector {

    static CONFIG = {
        id: "eledo",
        name: "eledo",
        description: "i18n.collectors.eledo.description",
        version: "0",
        website: "https://eledo.online/manage/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175410.jpg",
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
        entryUrl: "https://eledo.online/manage/payments",
    }

    constructor() {
        super(EledoCollector.CONFIG);
    }
}
