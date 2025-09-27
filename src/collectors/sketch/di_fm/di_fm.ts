
import { SketchCollector } from '../../sketchCollector';

export class DiFmCollector extends SketchCollector {

    static CONFIG = {
        id: "di_fm",
        name: "DI.FM",
        description: "i18n.collectors.di_fm.description",
        version: "0",
        website: "https://www.di.fm/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38313.jpg",
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
        entryUrl: "https://www.di.fm/login",
    }

    constructor() {
        super(DiFmCollector.CONFIG);
    }
}
