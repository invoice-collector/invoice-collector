
import { SketchCollector } from '../../sketchCollector';

export class TranslatedCollector extends SketchCollector {

    static CONFIG = {
        id: "translated",
        name: "Translated",
        description: "i18n.collectors.translated.description",
        version: "0",
        website: "https://www.translated.net/int/ots.php?l=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/34064.jpg",
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
        entryUrl: "https://www.translated.net/int/ots.php?l=de",
    }

    constructor() {
        super(TranslatedCollector.CONFIG);
    }
}
