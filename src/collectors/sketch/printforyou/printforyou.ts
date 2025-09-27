
import { SketchCollector } from '../../sketchCollector';

export class PrintforyouCollector extends SketchCollector {

    static CONFIG = {
        id: "printforyou",
        name: "printforyou",
        description: "i18n.collectors.printforyou.description",
        version: "0",
        website: "https://www.printforyou.fr/commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/850037.jpg",
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
        entryUrl: "https://www.printforyou.fr/commandes",
    }

    constructor() {
        super(PrintforyouCollector.CONFIG);
    }
}
