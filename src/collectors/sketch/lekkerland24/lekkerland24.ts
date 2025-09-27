
import { SketchCollector } from '../../sketchCollector';

export class Lekkerland24Collector extends SketchCollector {

    static CONFIG = {
        id: "lekkerland24",
        name: "Lekkerland24",
        description: "i18n.collectors.lekkerland24.description",
        version: "0",
        website: "https://www.lekkerland24.de/index.php?cl=account_order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24850.jpg",
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
        entryUrl: "https://www.lekkerland24.de/index.php?cl=account_order",
    }

    constructor() {
        super(Lekkerland24Collector.CONFIG);
    }
}
