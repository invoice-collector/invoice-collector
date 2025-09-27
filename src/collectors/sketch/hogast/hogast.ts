
import { SketchCollector } from '../../sketchCollector';

export class HogastCollector extends SketchCollector {

    static CONFIG = {
        id: "hogast",
        name: "Hogast",
        description: "i18n.collectors.hogast.description",
        version: "0",
        website: "https://easygoing.hogast.de/WebShop/fibu/menuBuchhaltungsdaten.do?showNeueRechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/533869.jpg",
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
        entryUrl: "https://easygoing.hogast.de/WebShop/fibu/menuBuchhaltungsdaten.do?showNeueRechnungen",
    }

    constructor() {
        super(HogastCollector.CONFIG);
    }
}
