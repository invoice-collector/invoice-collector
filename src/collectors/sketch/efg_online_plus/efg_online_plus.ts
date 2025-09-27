
import { SketchCollector } from '../../sketchCollector';

export class EfgOnlinePlusCollector extends SketchCollector {

    static CONFIG = {
        id: "efg_online_plus",
        name: "EFG ONLINE PLUS",
        description: "i18n.collectors.efg_online_plus.description",
        version: "0",
        website: "www.efgonlineplus.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/790735.jpg",
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
        entryUrl: "www.efgonlineplus.de",
    }

    constructor() {
        super(EfgOnlinePlusCollector.CONFIG);
    }
}
