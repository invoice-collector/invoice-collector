
import { SketchCollector } from '../../sketchCollector';

export class LentillesmoinscherComCollector extends SketchCollector {

    static CONFIG = {
        id: "lentillesmoinscher_com",
        name: "LentillesMoinsCher.com",
        description: "i18n.collectors.lentillesmoinscher_com.description",
        version: "0",
        website: "https://www.lentillesmoinscheres.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121363.jpg",
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
        entryUrl: "https://www.lentillesmoinscheres.com/",
    }

    constructor() {
        super(LentillesmoinscherComCollector.CONFIG);
    }
}
