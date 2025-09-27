
import { SketchCollector } from '../../sketchCollector';

export class KosatecCollector extends SketchCollector {

    static CONFIG = {
        id: "kosatec",
        name: "KOSATEC",
        description: "i18n.collectors.kosatec.description",
        version: "0",
        website: "https://www.kosatec.de/de/Login?redir=de/Home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24468.jpg",
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
        entryUrl: "https://www.kosatec.de/de/Login?redir=de/Home",
    }

    constructor() {
        super(KosatecCollector.CONFIG);
    }
}
