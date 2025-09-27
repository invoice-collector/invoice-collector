
import { SketchCollector } from '../../sketchCollector';

export class MediamarktsaturnCollector extends SketchCollector {

    static CONFIG = {
        id: "mediamarktsaturn",
        name: "MediaMarktSaturn",
        description: "i18n.collectors.mediamarktsaturn.description",
        version: "0",
        website: "https://mediamarktsaturn.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1862827.jpg",
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
        entryUrl: "https://mediamarktsaturn.mirakl.net/sellerpayment/shop/accounting-document/list?limit=25",
    }

    constructor() {
        super(MediamarktsaturnCollector.CONFIG);
    }
}
