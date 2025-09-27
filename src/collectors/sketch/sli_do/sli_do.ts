
import { SketchCollector } from '../../sketchCollector';

export class SliDoCollector extends SketchCollector {

    static CONFIG = {
        id: "sli_do",
        name: "Sli.do",
        description: "i18n.collectors.sli_do.description",
        version: "0",
        website: "https://accounts.sli.do/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26380.jpg",
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
        entryUrl: "https://accounts.sli.do/login",
    }

    constructor() {
        super(SliDoCollector.CONFIG);
    }
}
