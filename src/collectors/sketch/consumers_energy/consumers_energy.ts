
import { SketchCollector } from '../../sketchCollector';

export class ConsumersEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "consumers_energy",
        name: "Consumers Energy",
        description: "i18n.collectors.consumers_energy.description",
        version: "0",
        website: "https://www.consumersenergy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/383300.jpg",
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
        entryUrl: "https://www.consumersenergy.com/",
    }

    constructor() {
        super(ConsumersEnergyCollector.CONFIG);
    }
}
