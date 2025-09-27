
import { SketchCollector } from '../../sketchCollector';

export class DigixoComCollector extends SketchCollector {

    static CONFIG = {
        id: "digixo_com",
        name: "Digixo.com",
        description: "i18n.collectors.digixo_com.description",
        version: "0",
        website: "https://www.digixo.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118651.jpg",
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
        entryUrl: "https://www.digixo.com/login.php",
    }

    constructor() {
        super(DigixoComCollector.CONFIG);
    }
}
