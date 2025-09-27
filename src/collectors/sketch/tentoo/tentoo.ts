
import { SketchCollector } from '../../sketchCollector';

export class TentooCollector extends SketchCollector {

    static CONFIG = {
        id: "tentoo",
        name: "Tentoo",
        description: "i18n.collectors.tentoo.description",
        version: "0",
        website: "https://my.tentoo.nl/login/?_ga=2.93198430.2110826057.1524058832-1623198614.1524058832",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32330.jpg",
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
        entryUrl: "https://my.tentoo.nl/login/?_ga=2.93198430.2110826057.1524058832-1623198614.1524058832",
    }

    constructor() {
        super(TentooCollector.CONFIG);
    }
}
