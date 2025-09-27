
import { SketchCollector } from '../../sketchCollector';

export class AmazonWebServicesAwsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_web_services_aws",
        name: "Amazon Web Services (AWS)",
        description: "i18n.collectors.amazon_web_services_aws.description",
        version: "0",
        website: "https://console.aws.amazon.com/billing/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/440.jpg",
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
        entryUrl: "https://console.aws.amazon.com/billing/home",
    }

    constructor() {
        super(AmazonWebServicesAwsCollector.CONFIG);
    }
}
