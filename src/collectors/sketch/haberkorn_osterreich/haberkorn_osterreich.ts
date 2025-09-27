
import { SketchCollector } from '../../sketchCollector';

export class HaberkornOsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "haberkorn_osterreich",
        name: "Haberkorn Osterreich",
        description: "i18n.collectors.haberkorn_osterreich.description",
        version: "0",
        website: "https://www.haberkorn.com/at/de/bestellungen/ausgeliefert",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3104172.jpg",
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
        entryUrl: "https://www.haberkorn.com/at/de/bestellungen/ausgeliefert",
    }

    constructor() {
        super(HaberkornOsterreichCollector.CONFIG);
    }
}
