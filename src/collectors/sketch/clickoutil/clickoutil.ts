
import { SketchCollector } from '../../sketchCollector';

export class ClickoutilCollector extends SketchCollector {

    static CONFIG = {
        id: "clickoutil",
        name: "Clickoutil",
        description: "i18n.collectors.clickoutil.description",
        version: "0",
        website: "https://www.clickoutil.com/historique-des-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417606.jpg",
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
        entryUrl: "https://www.clickoutil.com/historique-des-commandes",
    }

    constructor() {
        super(ClickoutilCollector.CONFIG);
    }
}
