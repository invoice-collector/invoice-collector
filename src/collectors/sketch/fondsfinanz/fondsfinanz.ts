
import { SketchCollector } from '../../sketchCollector';

export class FondsfinanzCollector extends SketchCollector {

    static CONFIG = {
        id: "fondsfinanz",
        name: "Fondsfinanz",
        description: "i18n.collectors.fondsfinanz.description",
        version: "0",
        website: "https://www.fondsfinanz.de/myff/myfondsfinanz/?re=4",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/62962.jpg",
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
        entryUrl: "https://www.fondsfinanz.de/myff/myfondsfinanz/?re=4",
    }

    constructor() {
        super(FondsfinanzCollector.CONFIG);
    }
}
