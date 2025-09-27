
import { SketchCollector } from '../../sketchCollector';

export class NicRuCollector extends SketchCollector {

    static CONFIG = {
        id: "nic_ru",
        name: "NIC.ru",
        description: "i18n.collectors.nic_ru.description",
        version: "0",
        website: "https://www.nic.ru/manager/payment.cgi?step=pay.inv_list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150640.jpg",
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
        entryUrl: "https://www.nic.ru/manager/payment.cgi?step=pay.inv_list",
    }

    constructor() {
        super(NicRuCollector.CONFIG);
    }
}
