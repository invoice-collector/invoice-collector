
import { SketchCollector } from '../../sketchCollector';

export class TopachatComCollector extends SketchCollector {

    static CONFIG = {
        id: "topachat_com",
        name: "topachat.com",
        description: "i18n.collectors.topachat_com.description",
        version: "0",
        website: "https://www.topachat.com/pages/authentification.php?f=http://www.topachat.com/accueil/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26989.jpg",
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
        entryUrl: "https://www.topachat.com/pages/authentification.php?f=http://www.topachat.com/accueil/index.php",
    }

    constructor() {
        super(TopachatComCollector.CONFIG);
    }
}
