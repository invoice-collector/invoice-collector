
import { SketchCollector } from '../../sketchCollector';

export class DataslayerCollector extends SketchCollector {

    static CONFIG = {
        id: "dataslayer",
        name: "Dataslayer",
        description: "i18n.collectors.dataslayer.description",
        version: "0",
        website: "https://app.dataslayer.ai/billing-info",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1919599.jpg",
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
        entryUrl: "https://app.dataslayer.ai/billing-info",
    }

    constructor() {
        super(DataslayerCollector.CONFIG);
    }
}
