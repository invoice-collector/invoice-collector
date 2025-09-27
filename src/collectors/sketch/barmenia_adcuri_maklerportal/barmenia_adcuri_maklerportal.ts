
import { SketchCollector } from '../../sketchCollector';

export class BarmeniaAdcuriMaklerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "barmenia_adcuri_maklerportal",
        name: "Barmenia - Adcuri Maklerportal",
        description: "i18n.collectors.barmenia_adcuri_maklerportal.description",
        version: "0",
        website: "https://ssl.barmenia24.de/PostBoxWeb/postbox.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/73651.jpg",
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
        entryUrl: "https://ssl.barmenia24.de/PostBoxWeb/postbox.xhtml",
    }

    constructor() {
        super(BarmeniaAdcuriMaklerportalCollector.CONFIG);
    }
}
