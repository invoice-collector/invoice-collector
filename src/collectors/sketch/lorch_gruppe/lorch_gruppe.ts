
import { SketchCollector } from '../../sketchCollector';

export class LorchGruppeCollector extends SketchCollector {

    static CONFIG = {
        id: "lorch_gruppe",
        name: "Lorch-gruppe",
        description: "i18n.collectors.lorch_gruppe.description",
        version: "0",
        website: "https://shop.lorch-kg.de/home/vma/b2b/init.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/246198.jpg",
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
        entryUrl: "https://shop.lorch-kg.de/home/vma/b2b/init.do",
    }

    constructor() {
        super(LorchGruppeCollector.CONFIG);
    }
}
