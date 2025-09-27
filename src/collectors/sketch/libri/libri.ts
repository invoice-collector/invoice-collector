
import { SketchCollector } from '../../sketchCollector';

export class LibriCollector extends SketchCollector {

    static CONFIG = {
        id: "libri",
        name: "Libri",
        description: "i18n.collectors.libri.description",
        version: "0",
        website: "https://mein.libri.de/lieferung/lieferscheine-und-gutschriftanzeigen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1621999.jpg",
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
        entryUrl: "https://mein.libri.de/lieferung/lieferscheine-und-gutschriftanzeigen.html",
    }

    constructor() {
        super(LibriCollector.CONFIG);
    }
}
