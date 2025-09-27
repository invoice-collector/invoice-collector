
import { SketchCollector } from '../../sketchCollector';

export class HitenergieCollector extends SketchCollector {

    static CONFIG = {
        id: "hitenergie",
        name: "Hitenergie",
        description: "i18n.collectors.hitenergie.description",
        version: "0",
        website: "https://www.hitenergie.de/selfcare",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16487.jpg",
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
        entryUrl: "https://www.hitenergie.de/selfcare",
    }

    constructor() {
        super(HitenergieCollector.CONFIG);
    }
}
