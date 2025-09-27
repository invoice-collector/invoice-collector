
import { SketchCollector } from '../../sketchCollector';

export class LeihdeinerumweltgeldCollector extends SketchCollector {

    static CONFIG = {
        id: "leihdeinerumweltgeld",
        name: "LeihDeinerUmweltGeld",
        description: "i18n.collectors.leihdeinerumweltgeld.description",
        version: "0",
        website: "https://invest.leihdeinerumweltgeld.de/account/tax_documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121253.jpg",
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
        entryUrl: "https://invest.leihdeinerumweltgeld.de/account/tax_documents",
    }

    constructor() {
        super(LeihdeinerumweltgeldCollector.CONFIG);
    }
}
