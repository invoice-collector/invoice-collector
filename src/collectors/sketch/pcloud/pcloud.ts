
import { SketchCollector } from '../../sketchCollector';

export class PcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "pcloud",
        name: "pCloud",
        description: "i18n.collectors.pcloud.description",
        version: "0",
        website: "https://my.pcloud.com/#page=settings&settings=tab-finance",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94990.jpg",
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
        entryUrl: "https://my.pcloud.com/#page=settings&settings=tab-finance",
    }

    constructor() {
        super(PcloudCollector.CONFIG);
    }
}
