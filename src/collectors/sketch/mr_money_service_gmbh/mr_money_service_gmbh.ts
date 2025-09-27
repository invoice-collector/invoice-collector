
import { SketchCollector } from '../../sketchCollector';

export class MrMoneyServiceGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "mr_money_service_gmbh",
        name: "Mr-Money Service GmbH",
        description: "i18n.collectors.mr_money_service_gmbh.description",
        version: "0",
        website: "http://portal.maklersystems24.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64953.jpg",
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
        entryUrl: "http://portal.maklersystems24.de",
    }

    constructor() {
        super(MrMoneyServiceGmbhCollector.CONFIG);
    }
}
