
import { SketchCollector } from '../../sketchCollector';

export class Lox24Collector extends SketchCollector {

    static CONFIG = {
        id: "lox24",
        name: "LOX24",
        description: "i18n.collectors.lox24.description",
        version: "0",
        website: "https://www.lox24.eu/account/index.php?page=accounting",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/58353.jpg",
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
        entryUrl: "https://www.lox24.eu/account/index.php?page=accounting",
    }

    constructor() {
        super(Lox24Collector.CONFIG);
    }
}
