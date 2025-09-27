
import { SketchCollector } from '../../sketchCollector';

export class EroplacePlCollector extends SketchCollector {

    static CONFIG = {
        id: "eroplace_pl",
        name: "Eroplace.pl",
        description: "i18n.collectors.eroplace_pl.description",
        version: "0",
        website: "https://en.eroplace.pl/moje-konto/zamowienia",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3274076.jpg",
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
        entryUrl: "https://en.eroplace.pl/moje-konto/zamowienia",
    }

    constructor() {
        super(EroplacePlCollector.CONFIG);
    }
}
