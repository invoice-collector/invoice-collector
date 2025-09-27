
import { SketchCollector } from '../../sketchCollector';

export class FreelancerComCollector extends SketchCollector {

    static CONFIG = {
        id: "freelancer_com",
        name: "freelancer.com",
        description: "i18n.collectors.freelancer_com.description",
        version: "0",
        website: "https://www.freelancer.com/payments/transactions.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10086.jpg",
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
        entryUrl: "https://www.freelancer.com/payments/transactions.php",
    }

    constructor() {
        super(FreelancerComCollector.CONFIG);
    }
}
