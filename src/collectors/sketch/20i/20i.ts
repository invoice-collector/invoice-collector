
import { SketchCollector } from '../../sketchCollector';

export class _20iCollector extends SketchCollector {

    static CONFIG = {
        id: "20i",
        name: "20i",
        description: "i18n.collectors.20i.description",
        version: "0",
        website: "https://my.20i.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1182871.jpg",
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
        entryUrl: "https://my.20i.com/login",
    }

    constructor() {
        super(_20iCollector.CONFIG);
    }
}
