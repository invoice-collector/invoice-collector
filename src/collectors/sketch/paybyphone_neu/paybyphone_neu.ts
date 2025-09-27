
import { SketchCollector } from '../../sketchCollector';

export class PaybyphoneNeuCollector extends SketchCollector {

    static CONFIG = {
        id: "paybyphone_neu",
        name: "PayByPhone NEU",
        description: "i18n.collectors.paybyphone_neu.description",
        version: "0",
        website: "https://m2.paybyphone.com/parking/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1334803.jpg",
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
        entryUrl: "https://m2.paybyphone.com/parking/history",
    }

    constructor() {
        super(PaybyphoneNeuCollector.CONFIG);
    }
}
