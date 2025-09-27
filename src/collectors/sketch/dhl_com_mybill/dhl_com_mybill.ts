
import { SketchCollector } from '../../sketchCollector';

export class DhlComMybillCollector extends SketchCollector {

    static CONFIG = {
        id: "dhl_com_mybill",
        name: "DHL.com - MyBill",
        description: "i18n.collectors.dhl_com_mybill.description",
        version: "0",
        website: "https://mybill.dhl.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20446.jpg",
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
        entryUrl: "https://mybill.dhl.com/login/",
    }

    constructor() {
        super(DhlComMybillCollector.CONFIG);
    }
}
