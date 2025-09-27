
import { SketchCollector } from '../../sketchCollector';

export class KolnerPensionskasseCollector extends SketchCollector {

    static CONFIG = {
        id: "kolner_pensionskasse",
        name: "Kolner Pensionskasse",
        description: "i18n.collectors.kolner_pensionskasse.description",
        version: "0",
        website: "https://kpk-pkc.foxdox.de/login?next=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226575.jpg",
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
        entryUrl: "https://kpk-pkc.foxdox.de/login?next=%2F",
    }

    constructor() {
        super(KolnerPensionskasseCollector.CONFIG);
    }
}
